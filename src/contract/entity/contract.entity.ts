import { ethers } from 'ethers';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Contract', synchronize: false })
export default class Contract {
  @PrimaryColumn()
  address: string;

  @Column()
  name: string;

  @Column({ type: 'json' })
  abi: ethers.InterfaceAbi | ethers.Interface;
}
