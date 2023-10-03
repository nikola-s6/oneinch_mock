import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
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

  @IsOptional()
  @Validate(ProtocolsValidation)
  protocols?: Protocols;
}

export class SwapResponseDTO {
  tx: TxData;
  protocols: Array<Array<ProtocolsData>>;
}

export class TxData {
  data: string;
}

export enum Protocols {
  Swap = 'SWAP',
  Uniswap_v2 = 'UNISWAP_V2',
}

export class ProtocolsData {
  name: Protocols;
  part: number;
  fromTokenAddress: string;
  toTokenAddress: string;
}
