import { Post } from 'src/posts/domain/post';

export class System {
  id: string;
  name: string;
  description: string;
  posts?: Post[];
  createdAt?: Date;
  updatedAt?: Date;
}
