import { Module } from '@nestjs/common';
import { RelationalSystemPersistenceModule } from './infrastructure/relational/relation-persistence.module';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

@Module({
  imports: [RelationalSystemPersistenceModule],
  controllers: [SystemController],
  providers: [SystemService],
  exports: [SystemService, RelationalSystemPersistenceModule],
})
export class SystemModule {}
