import { Content } from '../doamin/content';

export abstract class ContentRepository {
  abstract getAll(): Promise<Content[]>;
  abstract getByKey(key: string): Promise<Content | null>;
  abstract getByName(name: string): Promise<Content | null>;
}
