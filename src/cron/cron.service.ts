import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry, Cron } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { UpdateCronDTO, TradeDTO } from './dto/cron.dto';
import { TokenRepository } from 'src/token/token.reporitory';
import Token from 'src/token/entity/token.entity';
import { HttpService } from '@nestjs/axios';
import { Not } from 'typeorm';
import { ethers } from 'ethers';
import { contracts } from 'src/contract/contract.utils';
import { SwapService } from 'src/swap/swap.service';
import {
  Protocols,
  SwapDTO,
  SwapResponseDTO,
} from 'src/swap/entity/dto/swap.dto';
import { sign } from 'crypto';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  private numSwapsPerExecution = 1;
  private url = 'https://a28f-217-26-78-202.ngrok.io';

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private readonly tokenRepository: TokenRepository,
    private readonly swapService: SwapService,
    private httpService: HttpService,
  ) {}

  async executeSwap() {
    console.log('swap');
    await this.swapFunc();
  }

  changeUrl(url: string) {
    this.url = url;
  }

  changeCronSchedule(updateCron: UpdateCronDTO) {
    try {
      this.schedulerRegistry.deleteCronJob('swap');
    } catch (error) {
      this.logger.warn(`no cron with name swap found`);
    }

    const newCron = new CronJob(updateCron.time, async () => {
      for (let index = 0; index < this.numSwapsPerExecution; index++) {
        await this.swapFunc();
      }
    });

    this.schedulerRegistry.addCronJob('swap', newCron);
    this.numSwapsPerExecution =
      updateCron.numSwapsPerExecution || this.numSwapsPerExecution;

    newCron.start();
  }

  private async swapFunc() {
    const tokens: Token[] = await this.tokenRepository.find({
      where: {
        name: Not('WETH'),
      },
    });

    let srcToken: Token = this.getRandomToken(tokens);
    while (srcToken.symbol !== 'scnd') {
      srcToken = this.getRandomToken(tokens);
    }

    let dstToken: Token = this.getRandomToken(tokens);
    while (srcToken.name === dstToken.name || dstToken.name !== 'Ether') {
      dstToken = this.getRandomToken(tokens);
    }

    const provider = new ethers.AlchemyProvider(
      'sepolia',
      process.env.ALCHEMY_KEY,
    );
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const oneinchAddress = contracts['AggregationRouterV5'].address;

    const amount: string = ethers
      .parseEther(Number((Math.floor(Math.random() * 4) + 1) / 100).toString())
      .toString();

    const srcTokenContract = new ethers.Contract(
      srcToken.address,
      contracts['Token'].abi,
      signer,
    );

    const dstTokenContract = new ethers.Contract(
      dstToken.address,
      contracts['Token'].abi,
      signer,
    );

    // TODO: ne racunati ovo ako je dstToken Ether
    const balanceBefore: number =
      dstToken.name === 'Ether'
        ? ((await provider.getBalance(
            signer.address,
          )) as bigint as unknown as number)
        : ((await dstTokenContract.balanceOf(
            await signer.getAddress(),
          )) as bigint as unknown as number);

    const appResp: ethers.TransactionResponse = await srcTokenContract.approve(
      oneinchAddress,
      ethers.toBigInt(amount),
    );
    await appResp.wait();

    const swapData: SwapDTO = {
      src: srcToken.address,
      dst: dstToken.address,
      amount: amount,
      from: await signer.getAddress(),
      slippage: 1,
      // protocols: Date.now() % 2 === 0 ? Protocols.Swap : Protocols.Uniswap_v3,
      protocols: Protocols.Uniswap_v2,
    };

    const data: SwapResponseDTO = await this.swapService.getSwapData(swapData);

    console.log(amount);
    try {
      const swap: ethers.TransactionResponse = await signer.sendTransaction({
        to: oneinchAddress,
        data: data.tx.data,
        // value: srcToken.name === 'Ether' ? amount : ethers.parseEther('0'),
      });
      await swap.wait(2);

      const balanceAfter: number =
        dstToken.name === 'Ether'
          ? ((await provider.getBalance(
              signer.address,
            )) as bigint as unknown as number)
          : ((await dstTokenContract.balanceOf(
              await signer.getAddress(),
            )) as bigint as unknown as number);

      const tradeData: TradeDTO = {
        tokenOut: srcToken.address,
        tokenIn: dstToken.address,
        tokenOutAmount: amount,
        tokenInAmount: (balanceAfter - balanceBefore).toString(),
        txHash: swap.hash,
        trader: await signer.getAddress(),
      };
      this.logger.log('swap executed');
      console.log(tradeData);

      const resp = await fetch(`${this.url}/copy-trade/webhook`, {
        method: 'POST',
        body: JSON.stringify({
          tradeDto: tradeData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(await resp.json());
    } catch (error) {
      console.log(error);
      this.logger.warn('swap failed');
    }
  }

  private getRandomToken(arr: Token[]): Token {
    const randInd = Math.floor(Math.random() * arr.length);
    return arr[randInd];
  }
}
