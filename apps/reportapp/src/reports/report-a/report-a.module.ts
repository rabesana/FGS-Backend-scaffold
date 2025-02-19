import { Module } from '@nestjs/common';
import { ReportAController } from './report-a.controller';
import { ReportAService } from './report-a.service';

@Module({
  controllers: [ReportAController],
  providers: [ReportAService]
})
export class ReportAModule {}
