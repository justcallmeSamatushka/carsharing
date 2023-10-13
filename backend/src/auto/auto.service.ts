import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../shared/crud.service';
import { AutoEntity } from './entity/auto-entity';
import { AutoDto } from './dto/auto-dto';

@Injectable()
export class AutoService {
  constructor(
    @InjectRepository(AutoEntity)
    private autoRepository: Repository<AutoEntity>,
  ) {}

  async create(dto: AutoDto) {
    return this.autoRepository.save(dto);
  }

  async findById(id: number) {
    return this.autoRepository.findOne({
      where: {
        id,
      },
    });
  }

  async deleteById(id: number) {
    return this.autoRepository.delete({
      id,
    });
  }

  async update(dto: AutoEntity) {
    return this.autoRepository.update(
      {
        id: dto.id,
      },
      dto,
    );
  }
}
