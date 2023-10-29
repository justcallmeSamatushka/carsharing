import { forwardRef, Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { AutoService } from '../auto/auto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentEntity } from './entity/rent.entity';
import { RentController } from './rent.controller';
import { AutoModule } from '../auto/auto.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RentEntity]),
    forwardRef(() => AutoModule),
  ],
  providers: [RentService],
  controllers: [RentController],
  exports: [RentService],
})
export class RentModule {}
