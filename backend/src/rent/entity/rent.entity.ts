import { AutoEntity } from '../../auto/entity/auto-entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  auto_id: number;

  @Column()
  day: number;

  @Column()
  price: number;

  @OneToOne(() => AutoEntity, (auto) => auto)
  @JoinColumn({ name: 'auto_id' })
  auto: AutoEntity;

  @CreateDateColumn()
  created_at: Date;
}
