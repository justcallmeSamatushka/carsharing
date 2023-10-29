import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRentDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  auto_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  day: number;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  date: Date;
}
