import { Module } from '@nestjs/common';
import { RedoclyService } from './redocly.service';
import { RedoclyController } from './redocly.controller';

@Module({
  controllers: [RedoclyController],
  providers: [RedoclyService]
})
export class RedoclyModule {}
