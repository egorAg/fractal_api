import { System } from '../domain/system';

export abstract class SystemRepository {
  abstract getAll(): Promise<System[]>;
}
