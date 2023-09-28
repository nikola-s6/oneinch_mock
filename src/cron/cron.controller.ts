import { Controller, Post, Body } from '@nestjs/common';
import { CronService } from './cron.service';
import { UpdateCronDTO } from './dto/cron.dto';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  // receiver string in format "* * * * * *"
  @Post('schedule')
  changeCronSchedule(@Body() cronUpdate: UpdateCronDTO) {
    this.cronService.changeCronSchedule(cronUpdate);
  }

  @Post('url')
  changeUrl(@Body('url') url: string) {
    this.cronService.changeUrl(url);
  }
}
