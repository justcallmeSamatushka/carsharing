import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSignupDto } from '../auth/dto/auth-signup.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/guards/auth-guard';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('all')
  getUsers() {
    return this.userService.getAllUsers();
  }

  // @Post()
  // createUser(@Body() dto: UserSignupDto) {
  //   return this.userService.createUser(dto);
  // }
}
