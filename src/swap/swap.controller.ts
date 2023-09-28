import { Controller, Get, Query } from '@nestjs/common';
import { SwapService } from './swap.service';
import { SwapDTO, SwapResponseDTO } from './entity/dto/swap.dto';

@Controller('swap')
export class SwapController {
  constructor(private readonly swapService: SwapService) {}

  @Get()
  getData(@Query() swapData: SwapDTO): Promise<SwapResponseDTO> {
    return this.swapService.getSwapData(swapData);
  }
}
