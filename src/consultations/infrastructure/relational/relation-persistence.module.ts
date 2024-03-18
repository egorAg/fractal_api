import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultationRepository } from '../consultation.repository';
import { ConsultationEntity } from './entities/consultation.entity';
import { ConsultationRelationalRepository } from './repositories/consultation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ConsultationEntity])],
  providers: [
    {
      provide: ConsultationRepository,
      useClass: ConsultationRelationalRepository,
    },
  ],
  exports: [ConsultationRepository],
})
export class RelationalConsultationPersistenceModule {}
