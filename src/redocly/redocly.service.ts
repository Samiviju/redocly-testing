import { Injectable } from '@nestjs/common';
import { CreateRedoclyDto } from './dto/create-redocly.dto';
import { UpdateRedoclyDto } from './dto/update-redocly.dto';

@Injectable()
export class RedoclyService {
  create(createRedoclyDto: CreateRedoclyDto) {
    return 'This action adds a new redocly';
  }

  findAll() {
    return `This action returns all redocly`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redocly`;
  }

  update(id: number, updateRedoclyDto: UpdateRedoclyDto) {
    return `This action updates a #${id} redocly`;
  }

  remove(id: number) {
    return `This action removes a #${id} redocly`;
  }
}
