import { Module } from '@nestjs/common';
import { SwapController } from './swap.controller';
import { SwapService } from './swap.service';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [TokenModule],
  controllers: [SwapController],
  providers: [SwapService],
  exports: [SwapService],
})
export class SwapModule {}
