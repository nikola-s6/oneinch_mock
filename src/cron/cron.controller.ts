import { Controller, Post, Body } from '@nestjs/common';
import { CronService } from './cron.service';
import { CustomSwapDTO, SwapHashResponse, UpdateCronDTO } from './dto/cron.dto';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  // receiver string in format "* * * * * *"
  @Post('schedule')
  changeCronSchedule(@Body() cronUpdate: UpdateCronDTO) {
    this.cronService.changeCronSchedule(cronUpdate);
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

  @Post('stop')
  async stopCron() {
    this.cronService.deleteCron();
  }
}
