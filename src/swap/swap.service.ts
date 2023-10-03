import { Injectable } from '@nestjs/common';
import {
  Protocols,
  SwapDTO,
  SwapResponseDTO,
  TxData,
} from './entity/dto/swap.dto';
import { ethers } from 'ethers';
import { contracts } from 'src/contract/contract.utils';
import * as ContractDB from '../contract/entity/contract.entity';
import Token from 'src/token/entity/token.entity';
import { TokenRepository } from 'src/token/token.reporitory';

@Injectable()
export class SwapService {
  private readonly SWAP_SELECTOR = '0x12aa3caf';
  private readonly UNISWAP_V2_SELECTOR = '0x0502b1c5';

  constructor(private readonly tokenRepository: TokenRepository) {}

  async getSwapData(swapData: SwapDTO): Promise<SwapResponseDTO> {
    const data: SwapResponseDTO = new SwapResponseDTO();
    if (!swapData.protocols) {
      swapData.protocols =
        Date.now() % 2 === 0 ? Protocols.Swap : Protocols.Uniswap_v2;
    }

    const tx = new TxData();
    tx.data =
      swapData.protocols === Protocols.Swap
        ? await this.handleGenericSwap(swapData)
        : await this.handleUniswapV2(swapData);

    data.tx = tx;

    data.protocols = [
      [
        {
          name: swapData.protocols,
          part: 100,
          fromTokenAddress: swapData.src,
          toTokenAddress: swapData.dst,
        },
      ],
    ];

    return data;
  }

  private async handleGenericSwap(swapData: SwapDTO): Promise<string> {
    const coder = new ethers.AbiCoder();

    const executor: ContractDB.default = contracts['OneInchExecutor'];

    const data = coder.encode(
      [
        'address', // executor
        'address', // srcToken
        'address', // dstToken
        'address', // srcReceiver
        'address', // dstReceiver
        'uint256', // amount
        'uint256', // minReturnAmount
        'uint256', // flags
        'bytes', // permit
        'bytes', // data
      ],
      [
        executor.address,
        swapData.src,
        swapData.dst,
        executor.address,
        ethers.ZeroAddress,
        swapData.amount,
        1,
        4,
        '0x',
        coder.encode(['address', 'address'], [swapData.src, swapData.dst]),
      ],
    );
    return this.SWAP_SELECTOR + data.slice(2);
  }

  private async handleUniswapV2(swapData: SwapDTO): Promise<string> {
    const coder = new ethers.AbiCoder();

    const srcToken: Token = await this.tokenRepository.findOneOrFail({
      where: {
        address: swapData.src,
      },
    });

    const dstToken: Token = await this.tokenRepository.findOneOrFail({
      where: {
        address: swapData.dst,
      },
    });
    const pools = [];

    if (srcToken.name === 'Primary' || dstToken.name === 'Primary') {
      dstToken.name === 'Ether'
        ? pools.push(this.getPool(srcToken, dstToken, true))
        : pools.push(this.getPool(srcToken, dstToken, false));
    } else {
      const primToken: Token = await this.tokenRepository.findOne({
        where: {
          name: 'Primary',
        },
      });
      pools.push(this.getPool(srcToken, primToken, false));
      dstToken.name === 'Ether'
        ? pools.push(this.getPool(primToken, dstToken, true))
        : pools.push(this.getPool(primToken, dstToken, false));
    }

    const data = coder.encode(
      [
        'address', //srcToken address
        'uint256', //amount
        'uint256', //minReturnAmount
        'uint256[]', //pools
      ],
      [srcToken.address, swapData.amount, 1, pools],
    );

    return this.UNISWAP_V2_SELECTOR + data.slice(2);
  }

  private getPool(sToken: Token, dToken: Token, unwrap: boolean) {
    let poolHex: string = '';
    if (sToken.name === 'Primary') {
      if (dToken.pairPrimary) {
        poolHex += unwrap
          ? 'C0000000000000003B6D0340'
          : '80000000000000003B6D0340';
      } else {
        poolHex += unwrap
          ? '40000000000000003B6D0340'
          : '00000000000000003B6D0340';
      }
      poolHex += dToken.pair?.substring(2);
      return ethers.toBigInt(this.h2d(poolHex));
    } else if (dToken.name === 'Primary') {
      poolHex += sToken.pairPrimary
        ? '00000000000000003B6D0340'
        : '80000000000000003B6D0340';
      poolHex += sToken.pair?.substring(2);
      console.log(sToken, 'sToken');
      console.log(poolHex, 'poolHex');
      return ethers.toBigInt(this.h2d(poolHex));
    } else {
      throw new Error('One token must be primary');
    }
  }

  private h2d(s: string) {
    function add(x: any, y: any) {
      var c = 0,
        r = [];
      var x = x.split('').map(Number);
      var y = y.split('').map(Number);
      while (x.length || y.length) {
        var s = (x.pop() || 0) + (y.pop() || 0) + c;
        r.unshift(s < 10 ? s : s - 10);
        c = s < 10 ? 0 : 1;
      }
      if (c) r.unshift(c);
      return r.join('');
    }

    var dec = '0';
    s.split('').forEach(function (chr: any) {
      var n = parseInt(chr, 16);
      for (var t = 8; t; t >>= 1) {
        dec = add(dec, dec);
        if (n & t) dec = add(dec, '1');
      }
    });
    return dec;
  }
}
