import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCronDTO {
  // cron time ex. "*/10 * * * * *"
  @IsNotEmpty()
  time: string;

  @IsOptional()
  numSwapsPerExecution?: number;
}

export class TradeDTO {
  tokenOut: string;
  tokenIn: string;
  tokenOutAmount: string;
  tokenInAmount: string;
  trader: string;
  txHash: string;
}

export class CustomSwapDTO {
  tokenOut: string;
  tokenIn: string;
  tokenOutAmount: string;
}

export class SwapHashResponse {
  txHash: string;
}
