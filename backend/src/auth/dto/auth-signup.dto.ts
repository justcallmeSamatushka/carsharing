import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IUserLogin } from '../types/auth.types';
import { ApiProperty } from '@nestjs/swagger';

export class UserSignupDto implements IUserLogin {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  firstName: string;
}
