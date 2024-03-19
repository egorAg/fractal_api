import { Topic } from 'src/topics/domain/topic';

export class Consultation {
  id: string;
  file?: string;
  topic?: Topic[];
  bucket: string;
  specialist: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
