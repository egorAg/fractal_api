import { Comment } from 'src/comments/domain/comment';
import { PostMapper } from 'src/posts/infrastructure/relational/mappers/post.mapper';
import { CommentEntity } from '../entities/comment.entity';

export class CommentMapper {
  static toDomain(raw: CommentEntity): Comment {
    const comment = new Comment();

    comment.approved = raw.approved;
    comment.createdAt = raw.createdAt;
    comment.id = raw.id;
    comment.message = raw.message;
    comment.name = raw.name;
    if (raw.post) comment.post = PostMapper.toDomain(raw.post);
    comment.updatedAt = raw.updatedAt;

    return comment;
  }

  static toPersistance(raw: Comment): CommentEntity {
    const comment = new CommentEntity();

    comment.message = raw.message;
    comment.name = raw.name;
    comment.post = PostMapper.toPersistance(raw.post);
    if (raw.approved) comment.approved = raw.approved;
    if (raw.createdAt) comment.createdAt = raw.createdAt;
    if (raw.id) comment.id = raw.id;
    if (raw.updatedAt) comment.updatedAt = raw.updatedAt;

    return comment;
  }
}
