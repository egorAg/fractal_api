import { Consultation } from 'src/consultations/domain/consultation';
import { Post } from 'src/posts/domain/post';

export class Topic {
  id?: string;
  name: string;
  description: string;
  consultations?: Consultation[];
  posts?: Post[];
  createdAt?: Date;
  updatedAt?: Date;
}
