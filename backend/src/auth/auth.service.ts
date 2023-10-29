import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserSignupDto } from './dto/auth-signup.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserLoginDto } from './dto/auth-login.dto';
import { UserEntity } from '../user/entity/user-entity';

@Injectable()
export class AuthService {
  saltOrRounds = 10;

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: UserLoginDto) {
    const user = await this.userService.findUser(dto.email);
    const isPassMatched = await bcrypt.compare(dto.password, user.password);

    if (!isPassMatched) {
      throw new UnauthorizedException();
    }
    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
      lastName: user.lastName,
      firstName: user.firstName,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signup(dto: UserSignupDto) {
    const hashedPassword = await bcrypt.hash(dto.password, this.saltOrRounds);
    return await this.userService.createUser({
      password: hashedPassword,
      username: dto.username,
      email: dto.email,
      lastName: dto.lastName,
      firstName: dto.firstName,
    });
  }

  async googleLogin(user: UserEntity) {
    if (!user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user,
    };
  }
}
