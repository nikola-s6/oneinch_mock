import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { TokenModule } from 'src/token/token.module';
import { HttpModule } from '@nestjs/axios';
import { SwapModule } from 'src/swap/swap.module';

@Module({
  imports: [TokenModule, HttpModule, SwapModule],
  controllers: [CronController],
  providers: [CronService],
  exports: [],
})
export class CronModule {}
