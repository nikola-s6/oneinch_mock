import { IsNotEmpty, Validate } from 'class-validator';
import { ProtocolsValidation } from 'src/validation/protocolsValidation';

export class SwapDTO {
  @IsNotEmpty()
  src: string;

  @IsNotEmpty()
  dst: string;

  @IsNotEmpty()
  amount: string;

  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  slippage: number;

  @IsNotEmpty()
  @Validate(ProtocolsValidation)
  protocols: Protocols;
}

export class SwapResponseDTO {
  tx: string;
}

export enum Protocols {
  Swap = 'SWAP',
  Uniswap_v3 = 'UNISWAP_V2',
}
