import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AutoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  type: string;

  @Column()
  brand: string;

  @Column()
  price: number;
}
