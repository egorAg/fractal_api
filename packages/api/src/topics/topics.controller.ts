import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TopicsService } from './topics.service';

@ApiTags('Topics')
@Controller({ path: 'topics', version: '1' })
export class TopicsController {
  constructor(private readonly topicService: TopicsService) {}
  @ApiOperation({
    description: 'Get all topics',
    summary:
      'Returns all active topics, use it as filter for consultations/posts',
  })
  @Get()
  public async getAllTopics() {
    return this.topicService.getAllTopics();
  }
}
