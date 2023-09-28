import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwapModule } from './swap/swap.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { TokenModule } from './token/token.module';
import { CronModule } from './cron/cron.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    ScheduleModule.forRoot(),
    DatabaseModule,
    SwapModule,
    TokenModule,
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
