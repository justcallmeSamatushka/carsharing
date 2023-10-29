import { forwardRef, Module } from '@nestjs/common';
import { RentService } from '../rent/rent.service';
import { AutoService } from './auto.service';
import { AutoController } from './auto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoEntity } from './entity/auto-entity';
import { RentModule } from '../rent/rent.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AutoEntity]),
    forwardRef(() => RentModule),
  ],
  providers: [AutoService],
  controllers: [AutoController],
  exports: [AutoService],
})
export class AutoModule {}
