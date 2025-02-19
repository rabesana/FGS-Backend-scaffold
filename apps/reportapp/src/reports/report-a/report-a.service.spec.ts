import { Test, TestingModule } from '@nestjs/testing';
import { ReportAService } from './report-a.service';

describe('ReportAService', () => {
  let service: ReportAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportAService],
    }).compile();

    service = module.get<ReportAService>(ReportAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
