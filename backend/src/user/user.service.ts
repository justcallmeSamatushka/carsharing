import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSignupDto } from '../auth/dto/auth-signup.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

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
