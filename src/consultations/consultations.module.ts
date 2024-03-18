import { Module } from '@nestjs/common';
import { TelegramModule } from 'src/telegram/telegram.module';
import { TopicsModule } from 'src/topics/topics.module';
import { ConsultationsController } from './consultations.controller';
import { ConsultationsService } from './consultations.service';
import { RelationalConsultationPersistenceModule } from './infrastructure/relational/relation-persistence.module';

@Module({
  imports: [
    TelegramModule,
    TopicsModule,
    RelationalConsultationPersistenceModule,
  ],
  providers: [ConsultationsService],
  controllers: [ConsultationsController],
  exports: [ConsultationsService, RelationalConsultationPersistenceModule],
})
export class ConsultationsModule {}
