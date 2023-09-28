import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import Token from './entity/token.entity';

@Injectable()
export class TokenRepository extends Repository<Token> {
  constructor(private dataSource: DataSource) {
    super(
      Token,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }
}
