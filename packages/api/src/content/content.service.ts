import { Injectable } from '@nestjs/common';
import { ContentRepository } from './infrastructure/content.repository';

@Injectable()
export class ContentService {
  constructor(private readonly contentRepository: ContentRepository) {}

  public async getAllKeys() {
    const content = await this.contentRepository.getAll();

    return content.map((keyVal) => keyVal.name);
  }

  public async getAllValues() {
    const content = await this.contentRepository.getAll();

    return content.map((keyVal) => keyVal.value);
  }

  public async getByKey(key: string) {
    return this.contentRepository.getByKey(key);
  }

  public async getByPattern(name: string) {
    return this.contentRepository.getByName(name);
  }
}
