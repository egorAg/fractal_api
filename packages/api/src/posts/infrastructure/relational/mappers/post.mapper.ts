import { Post } from 'src/posts/domain/post';
import { SystemMapper } from 'src/system/infrastructure/relational/mappers/system.mapper';
import { TopicMapper } from 'src/topics/infrastructure/relational/mappers/topic.mapper';
import { PostEntity } from '../entities/post.entity';

export class PostMapper {
  static toDomain(raw: PostEntity): Post {
    const post = new Post();
    post.author = raw.author;
    post.content = raw.content;
    post.description = raw.description;
    post.id = raw.id;
    post.name = raw.name;
    post.slug = raw.slug;

    if (raw.updated_at) post.updatedAt = raw.updated_at;
    if (raw.topics)
      post.topics = raw.topics.map((item) => TopicMapper.toDomain(item));
    if (raw.systems)
      post.systems = raw.systems.map((item) => SystemMapper.toDomain(item));
    if (raw.file) post.file = raw.file;
    if (raw.created_at) post.createdAt = raw.created_at;
    if (post.bucket) post.bucket = raw.bucket;
    return post;
  }

  static toPersistance(raw: Post): PostEntity {
    const post = new PostEntity();
    post.author = raw.author;
    post.content = raw.content;
    post.description = raw.description;
    post.id = raw.id;
    post.name = raw.name;
    post.slug = raw.slug;

    if (raw.topics)
      post.topics = raw.topics.map((item) => TopicMapper.toPersistance(item));
    if (raw.systems)
      post.systems = raw.systems.map((item) => SystemMapper.toPrecision(item));
    if (raw.file) post.file = raw.file;
    if (raw.bucket) post.bucket = raw.bucket;

    return post;
  }
}
