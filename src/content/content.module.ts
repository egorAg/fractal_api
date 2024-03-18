import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { RelationalPostPersistenceModule } from './infrastructure/relational/relation-persistence.module';

@Module({
  imports: [RelationalPostPersistenceModule],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
