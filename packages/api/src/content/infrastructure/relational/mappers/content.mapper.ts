import { Content } from 'src/content/doamin/content';
import { ContentEntity } from '../entities/content.entity';

export class ContentMapper {
  static toDomain(raw: ContentEntity): Content {
    const content = new Content();

    content.name = raw.name;
    content.value = raw.value;

    if (raw.created_at) content.createdAt = raw.created_at;
    if (raw.updated_at) content.updatedAt = raw.updated_at;
    if (raw.id) content.id = raw.id;

    return content;
  }

  static toPersistance(raw: Content): ContentEntity {
    const content = new ContentEntity();

    content.name = raw.name;
    content.value = raw.value;

    if (raw.createdAt) content.created_at = raw.createdAt;
    if (raw.updatedAt) content.updated_at = raw.updatedAt;
    if (raw.id) content.id = raw.id;

    return content;
  }
}
