import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Token' })
export default class Token {
  @PrimaryColumn()
  address: string;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  weight: number;

  @Column()
  pair?: string;

  @Column()
  pairPrimary?: boolean;

  @Column()
  totalSupply: string;
}
