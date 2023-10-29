import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/auto-dto';
import { AutoEntity } from './entity/auto-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentService } from '../rent/rent.service';

@Injectable()
export class AutoService {
  constructor(
    @InjectRepository(AutoEntity)
    private readonly autoRepository: Repository<AutoEntity>,
    private readonly rentService: RentService,
  ) {}

  async create(dto: CreateAutoDto) {
    return this.autoRepository.save(dto);
  }
  async findAll({ page = 0, limit = 20, keyword = '' }) {
    const skip = (page - 1) * limit;
    const query = this.autoRepository
      .createQueryBuilder('auto')
      .where('car.brand LIKE :keyword OR car.model LIKE :keyword', {
        keyword: `%${keyword}%`,
      })
      .take(limit)
      .skip(skip);

    return await query.getMany();
  }
}
