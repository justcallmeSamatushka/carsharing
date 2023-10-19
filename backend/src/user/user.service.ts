import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSignupDto } from '../auth/dto/auth-signup.dto';
import { CrudService } from '../shared/crud.service';
import { MyLogger } from '../config/logger';

@Injectable()
export class UserService extends CrudService<UserEntity> {
  private readonly logger = new MyLogger();

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async findUser(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
      select: {
        password: true,
      },
    });
  }

  async getAllUsers() {
    return this.userRepository.find();
  }

  async createUser(dto: UserSignupDto) {
    const found = await this.findUser(dto.email);

    if (found) {
      throw new BadRequestException('already exist');
    }

    await this.userRepository.save(dto);
  }
}
