import { Topic } from 'src/topics/domain/topic';
import { TopicEntity } from '../entities/topic.entity';

export class TopicMapper {
  static toDomain(raw: TopicEntity): Topic {
    const topic = new Topic();
    topic.createdAt = raw.created_at;
    topic.description = raw.description;
    topic.id = raw.id;
    topic.name = raw.name;
    topic.updatedAt = raw.updated_at;
    topic.consultations = raw.consultations;
    topic.posts = raw.posts;

    return topic;
  }

  static toPersistance(raw: Topic): TopicEntity {
    const topic = new TopicEntity();

    topic.description = raw.description;
    topic.id = raw.id as string;
    topic.name = raw.name;

    return topic;
  }
}
