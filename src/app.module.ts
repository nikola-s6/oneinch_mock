import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwapModule } from './swap/swap.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [ConfigModule.forRoot({}), DatabaseModule, SwapModule, TokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
