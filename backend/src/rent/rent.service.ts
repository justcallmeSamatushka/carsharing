import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { RentEntity } from './entity/rent.entity';
import { AutoService } from '../auto/auto.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRentDto } from './dto/create-rent.dto';

@Injectable()
export class RentService {
  constructor(
    @Inject(forwardRef(() => AutoService))
    private readonly autoService: AutoService,
    @InjectRepository(RentEntity)
    private readonly rentRepository: Repository<RentEntity>,
  ) {}

  async create(dto: CreateRentDto) {}
}
