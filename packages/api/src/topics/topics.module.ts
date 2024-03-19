import { Module } from '@nestjs/common';
import { RelationalTopicPersistenceModule } from './infrastructure/relational/relation-persistence.module';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

@Module({
  imports: [RelationalTopicPersistenceModule],
  providers: [TopicsService],
  controllers: [TopicsController],
  exports: [TopicsService, RelationalTopicPersistenceModule],
})
export class TopicsModule {}
