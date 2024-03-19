import { Post } from 'src/posts/domain/post';

export class Comment {
  id?: string;
  name: string;
  message: string;
  approved?: boolean;
  post: Post;
  createdAt?: Date;
  updatedAt?: Date;
}
