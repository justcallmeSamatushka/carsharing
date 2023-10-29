import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { QueryParams } from './interface/query-params';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AutoService } from './auto.service';
import { AutoEntity } from './entity/auto-entity';
import { CreateAutoDto } from './dto/auto-dto';

@ApiTags('Auto')
@ApiBearerAuth()
@Controller('/auto')
export class AutoController {
  constructor(private autoService: AutoService) {}

  @Post()
  async create(@Body() dto: CreateAutoDto): Promise<AutoEntity> {
    return await this.autoService.create(dto);
  }
  //
  // @Get('/:id/available')
  // async checkIfCarIsAvailable(@Param('id', ParseIntPipe) id: number) {
  //   return await this.autoService.checkAvailability(id);
  // }
  //
  // @Get()
  // @ApiQuery({ type: Number, name: 'limit', required: false })
  // @ApiQuery({ type: Number, name: 'page', required: false })
  // @ApiQuery({ type: String, name: 'keyword', required: false })
  // async findAll(@Query() query: QueryParams): Promise<AutoEntity[]> {
  //   return await this.autoService.findAll(query);
  // }
  //
  // @Get('/:id')
  // async findOne(@Param('id', ParseIntPipe) id: number): Promise<AutoEntity> {
  //   return await this.autoService.findOne(id);
  // }
}
