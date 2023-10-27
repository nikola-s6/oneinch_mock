import {
  Injectable,
  InternalServerErrorException,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { SchedulerRegistry, Cron } from '@nestjs/schedule';
import { CronJob } from 'cron';
import {
  UpdateCronDTO,
  TradeDTO,
  CustomSwapDTO,
  SwapHashResponse,
} from './dto/cron.dto';
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
import { response } from 'express';

@Injectable()
export class CronService implements OnModuleInit {
  private readonly logger = new Logger(CronService.name);
  private numSwapsPerExecution = 1;
  private provider: ethers.AlchemyProvider;
  // custom trader
  private signer1: ethers.Wallet;
  // cron trader 1
  private signer2: ethers.Wallet;
  // cron trader 2
  private signer3: ethers.Wallet;

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private readonly tokenRepository: TokenRepository,
    private readonly swapService: SwapService,
    private httpService: HttpService,
  ) {}

  onModuleInit() {
    this.provider = new ethers.AlchemyProvider(
      'sepolia',
      process.env.ALCHEMY_KEY,
    );
    this.signer1 = new ethers.Wallet(
      process.env.PRIVATE_KEY_MANUAL,
      this.provider,
    );
    this.signer2 = new ethers.Wallet(
      process.env.PRIVATE_KEY_CRON_1,
      this.provider,
    );
    this.signer3 = new ethers.Wallet(
      process.env.PRIVATE_KEY_CRON_2,
      this.provider,
    );
    this.logger.log('Wallets initialized');
  }

  async executeSwap(): Promise<SwapHashResponse> {
    return await this.swapFunc(this.signer3);
  }

  async deleteCron(cronId: number) {
    try {
      this.schedulerRegistry.deleteCronJob(`swap${cronId}`);
      this.logger.log(`Cron swap${cronId} deleted`);
    } catch (error) {
      this.logger.warn(`No cron with name swap${cronId} found`);
    }
  }

  changeCronSchedule(updateCron: UpdateCronDTO, cronId: number) {
    try {
      this.schedulerRegistry.deleteCronJob(`swap${cronId}`);
    } catch (error) {
      this.logger.warn(`no cron with name swap${cronId} found`);
    }

    const cronSigner = cronId === 1 ? this.signer2 : this.signer3;

    const newCron = new CronJob(updateCron.time, async () => {
      for (let index = 0; index < this.numSwapsPerExecution; index++) {
        try {
          await this.swapFunc(cronSigner);
        } catch (error) {
          console.log(error);
        }
      }
    });

    this.schedulerRegistry.addCronJob(`swap${cronId}`, newCron);
    this.numSwapsPerExecution =
      updateCron.numSwapsPerExecution || this.numSwapsPerExecution;

    newCron.start();
  }

  async executeCustomSwap(data: CustomSwapDTO): Promise<SwapHashResponse> {
    const oneinchAddress = contracts['AggregationRouterV5'].address;
    const oneinchData: SwapResponseDTO = await this.swapService.getSwapData({
      from: this.signer1.address,
      slippage: 1,
      src: data.tokenOut,
      dst: data.tokenIn,
      amount: data.tokenOutAmount,
      protocols: Protocols.Swap,
    });

    try {
      if (data.tokenOut !== ethers.ZeroAddress) {
        const srcTokenContract = new ethers.Contract(
          data.tokenOut,
          contracts['Token'].abi,
          this.signer1,
        );
        const appResp: ethers.TransactionResponse =
          await srcTokenContract.approve(
            oneinchAddress,
            ethers.toBigInt(data.tokenOutAmount),
          );
        await appResp.wait();
      }
      const swap: ethers.TransactionResponse =
        await this.signer1.sendTransaction({
          to: oneinchAddress,
          data: oneinchData.tx.data,
          value:
            data.tokenOut === ethers.ZeroAddress
              ? data.tokenOutAmount
              : ethers.parseEther('0'),
        });
      await swap.wait();
      this.logger.log(`Successful custom swap: ${swap.hash}`);
      return { txHash: swap.hash };
    } catch (error) {
      this.logger.warn('Custom swap failed');
      console.log(data);
      console.log(error);
      const balance: number = ethers.formatEther(
        await this.provider.getBalance(this.signer1.address),
      ) as unknown as number;
      if (balance <= 0.1) {
        throw new InternalServerErrorException(
          'Transaction failed probably due to insufficient wallet eht funds for gas.',
        );
      }
      throw new InternalServerErrorException('Transaction failed.');
    }
  }

  private async swapFunc(signer: ethers.Wallet): Promise<SwapHashResponse> {
    const tokens: Token[] = await this.tokenRepository.find({
      where: {
        name: Not('WETH'),
      },
    });

    let srcToken: Token = this.getRandomToken(tokens);

    let dstToken: Token = this.getRandomToken(tokens);
    while (srcToken.name === dstToken.name) {
      dstToken = this.getRandomToken(tokens);
    }

    const oneinchAddress = contracts['AggregationRouterV5'].address;

    const amount: string = ethers
      .parseEther(
        Number(
          (Math.floor(Math.random() * 4) + 1) /
            (srcToken.name === 'Ether' || dstToken.name === 'Ether'
              ? 1000
              : 100),
        ).toString(),
      )
      .toString();

    const swapData: SwapDTO = {
      src: srcToken.address,
      dst: dstToken.address,
      amount: amount,
      from: await signer.getAddress(),
      slippage: 1,
    };

    const data: SwapResponseDTO = await this.swapService.getSwapData(swapData);

    try {
      if (srcToken.name !== 'Ether') {
        const srcTokenContract = new ethers.Contract(
          srcToken.address,
          contracts['Token'].abi,
          signer,
        );
        const appResp: ethers.TransactionResponse =
          await srcTokenContract.approve(
            oneinchAddress,
            ethers.toBigInt(amount),
          );
        await appResp.wait();
      }
      const swap: ethers.TransactionResponse = await signer.sendTransaction({
        to: oneinchAddress,
        data: data.tx.data,
        value: srcToken.name === 'Ether' ? amount : ethers.parseEther('0'),
      });
      await swap.wait();

      this.logger.log(`Successfull swap: ${swap.hash}`);
      return { txHash: swap.hash };
    } catch (error) {
      this.logger.warn('Swap failed');
      console.log(swapData);
      console.log(error);

      const balance: number = ethers.formatEther(
        await this.provider.getBalance(signer.address),
      ) as unknown as number;
      if (balance <= 0.1) {
        this.logger.error(`Wallet ${signer.address} fund are low`);
        fetch(`${process.env.SERVER_URL}/save-cron-notification`)
          .then((response) => {
            if (!response.ok) {
              console.log(error);
              this.logger.error(`Failed to send data to apein server`);
            }
          })
          .catch((error) => {
            console.log(error);
            this.logger.error(`Failed to send data to apein server`);
          });
        throw new InternalServerErrorException(
          'Transaction failed probably due to insufficient wallet eht funds for gas.',
        );
      }
      throw new InternalServerErrorException('Swap failed');
    }
  }

  private getRandomToken(arr: Token[]): Token {
    const randInd = Math.floor(Math.random() * arr.length);
    return arr[randInd];
  }
}
