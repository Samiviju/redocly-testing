import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RedoclyService } from './redocly.service';
import { CreateRedoclyDto } from './dto/create-redocly.dto';
import { UpdateRedoclyDto } from './dto/update-redocly.dto';

@Controller('redocly')
export class RedoclyController {
  constructor(private readonly redoclyService: RedoclyService) {}

  @Post()
  create(@Body() createRedoclyDto: CreateRedoclyDto) {
    return this.redoclyService.create(createRedoclyDto);
  }

  @Get()
  findAll() {
    return this.redoclyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.redoclyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRedoclyDto: UpdateRedoclyDto) {
    return this.redoclyService.update(+id, updateRedoclyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.redoclyService.remove(+id);
  }
}
