import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AutoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  state_number: string;

  @Column()
  vin: string;
}
