import { Comment } from '../domain/comment';

export abstract class CommentRepository {
  abstract create(comment: Comment): Promise<void>;
  abstract getById(id: string): Promise<Comment | null>;
  abstract getAllByPost(postId: string): Promise<Comment[]>;
}
