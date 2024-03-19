import { System } from 'src/system/domain/system';
import { Topic } from 'src/topics/domain/topic';

export class Post {
  id: string;
  file?: string;
  bucket?: string;
  slug: string;
  author: string;
  name: string;
  description: string;
  content: string;
  topics?: Topic[];
  systems?: System[];
  createdAt?: Date;
  updatedAt?: Date;
}
