import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { CronService } from './cron.service';
import { CustomSwapDTO, SwapHashResponse, UpdateCronDTO } from './dto/cron.dto';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  // receiver string in format "* * * * * *"
  @Post('schedule/:id')
  changeCronSchedule(
    @Body() cronUpdate: UpdateCronDTO,
    @Param('id', ParseIntPipe) cronId: number,
  ) {
    if (![1, 2].includes(cronId)) {
      throw new BadRequestException('cron id must be 1 or 2');
    }
    this.cronService.changeCronSchedule(cronUpdate, cronId);
  }

  @Post('execute')
  async executeSwap() {
    return this.cronService.executeSwap();
  }

  @Post('execute/custom')
  async executeCustomSwap(
    @Body() swapData: CustomSwapDTO,
  ): Promise<SwapHashResponse> {
    return this.cronService.executeCustomSwap(swapData);
  }

  @Post('stop/:id')
  async stopCron(@Param('id', ParseIntPipe) cronId: number) {
    this.cronService.deleteCron(cronId);
  }
}
