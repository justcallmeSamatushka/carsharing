import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoController } from './auto.controller';
import { CrudService } from '../shared/crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user-entity';
import { AutoEntity } from './entity/auto-entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutoEntity])],
  providers: [AutoService, CrudService],
  controllers: [AutoController],
})
export class AutoModule {}
