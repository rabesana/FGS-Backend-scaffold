import { Test, TestingModule } from '@nestjs/testing';
import { ReportAController } from './report-a.controller';

describe('ReportAController', () => {
  let controller: ReportAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportAController],
    }).compile();

    controller = module.get<ReportAController>(ReportAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
