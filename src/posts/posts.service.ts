import { Injectable } from '@nestjs/common';
import { SystemMapper } from 'src/system/infrastructure/relational/mappers/system.mapper';
import { SystemService } from 'src/system/system.service';
import { TopicMapper } from 'src/topics/infrastructure/relational/mappers/topic.mapper';
import { TopicsService } from 'src/topics/topics.service';
import { PostRepository } from './infrastructure/post.repository';

@Injectable()
export class PostsService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly topicService: TopicsService,
    private readonly systemService: SystemService,
  ) {}

  public async getPosts(
    page: number,
    pageSize: number,
    systemId?: string,
    topicId?: string,
    name?: string,
  ) {
    return this.postRepository.searchPosts(
      page,
      pageSize,
      systemId,
      topicId,
      name,
    );
  }

  public async create() {
    const topics = await this.topicService.getAllTopics();
    const transformed = topics.map((topic) => TopicMapper.toPersistance(topic));
    const systems = await this.systemService.getAll();
    const transf = systems.map((sys) => SystemMapper.toPrecision(sys));
    await this.postRepository.create(transformed, transf);
  }
}
