import { PostEntity } from 'src/posts/infrastructure/relational/entities/post.entity';
import { System } from 'src/system/domain/system';
import { SystemEntity } from '../entities/system.entity';

export class SystemMapper {
  static toDomain(raw: SystemEntity): System {
    const sys = new System();
    sys.id = raw.id;
    sys.description = raw.description;
    sys.name = raw.name;
    if (raw.created_at) sys.createdAt = raw.created_at;
    if (raw.updated_at) sys.updatedAt = raw.updated_at;
    if (raw.posts) sys.posts = raw.posts;

    return sys;
  }
  static toPrecision(raw: System): SystemEntity {
    const sys = new SystemEntity();
    const posts = () => {
      return sys.posts.map((post) => {
        const entity = new PostEntity();
        return entity;
      });
    };
    sys.id = raw.id;
    sys.description = raw.description;
    sys.name = raw.name;
    if (raw.createdAt) sys.created_at = raw.createdAt;
    if (raw.updatedAt) sys.updated_at = raw.updatedAt;
    if (raw.posts) sys.posts = posts();
    return sys;
  }
}
