import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateAutoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly model: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly state_number: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly vin: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  readonly available: boolean;
}
