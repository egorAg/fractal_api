import { SystemEntity } from 'src/system/infrastructure/relational/entities/system.entity';
import { TopicEntity } from 'src/topics/infrastructure/relational/entities/topic.entity';
import { Post } from '../domain/post';

export abstract class PostRepository {
  abstract searchPosts(
    page: number,
    pageSize: number,
    systemId?: string,
    topicId?: string,
    name?: string,
  ): Promise<{ posts: Post[]; totalItems: number; totalPages: number }>;

  abstract create(
    topics: TopicEntity[],
    systems: SystemEntity[],
  ): Promise<void>;
}
