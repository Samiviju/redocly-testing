import { Test, TestingModule } from '@nestjs/testing';
import { RedoclyService } from './redocly.service';

describe('RedoclyService', () => {
  let service: RedoclyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedoclyService],
    }).compile();

    service = module.get<RedoclyService>(RedoclyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
