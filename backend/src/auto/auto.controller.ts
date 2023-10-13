import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AutoService } from './auto.service';
import { AutoEntity } from './entity/auto-entity';
import { AutoDto } from './dto/auto-dto';

@Controller('auto')
@ApiBearerAuth()
@ApiTags('Auto-Park')
export class AutoController {
  constructor(private readonly autoService: AutoService) {}

  @Get()
  getById(@Param('id') id: string) {
    return this.autoService.findById(+id);
  }

  @Post()
  create(@Body() dto: AutoDto) {
    return this.autoService.create(dto);
  }

  @Delete()
  delete(@Param('id') id: string) {
    return this.autoService.deleteById(+id);
  }

  @Put()
  update(@Body() dto: AutoEntity) {
    return this.autoService.update(dto);
  }
}
