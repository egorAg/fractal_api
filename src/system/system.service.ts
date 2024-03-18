import { Injectable } from '@nestjs/common';
import { SystemRepository } from './infrastructure/system.repository';

@Injectable()
export class SystemService {
  constructor(private readonly systemRepo: SystemRepository) {}

  public async getAll() {
    return this.systemRepo.getAll();
  }
}
