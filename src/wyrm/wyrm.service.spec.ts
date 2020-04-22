import { Test, TestingModule } from '@nestjs/testing';
import { WyrmService } from './wyrm.service';

describe('WyrmService', () => {
  let service: WyrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WyrmService],
    }).compile();

    service = module.get<WyrmService>(WyrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
