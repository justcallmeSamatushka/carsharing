import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Req,
  UseGuards,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/auth-login.dto';
import { UserSignupDto } from './dto/auth-signup.dto';
import { AuthGuard } from './guards/auth-guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../user/entity/user-entity';
import { User } from '../shared/utils';

@ApiTags('Authorization')
@ApiBearerAuth()
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@User() user: UserEntity) {
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(@Body() dto: UserLoginDto) {
    return this.authService.login(dto);
  }
  @HttpCode(HttpStatus.CREATED)
  @Post('/signup')
  signup(@Body() dto: UserSignupDto) {
    return this.authService.signup(dto);
  }
}
