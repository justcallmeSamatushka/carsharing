import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IUserLogin } from '../types/auth.types';
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto
  implements Omit<IUserLogin, 'lastName' | 'firstName'>
{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
