import { Module } from '@nestjs/common';
import { TokenRepository } from './token.reporitory';

@Module({
  imports: [],
  controllers: [],
  providers: [TokenRepository],
  exports: [TokenRepository],
})
export class TokenModule {}
