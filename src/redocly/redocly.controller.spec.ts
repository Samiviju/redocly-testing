import { Test, TestingModule } from '@nestjs/testing';
import { RedoclyController } from './redocly.controller';
import { RedoclyService } from './redocly.service';

describe('RedoclyController', () => {
  let controller: RedoclyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedoclyController],
      providers: [RedoclyService],
    }).compile();

    controller = module.get<RedoclyController>(RedoclyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
