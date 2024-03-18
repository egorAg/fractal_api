import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SystemEntity } from '../entities/system.entity';
import { SystemMapper } from '../mappers/system.mapper';

export class SystemRelationalRepository {
  constructor(
    @InjectRepository(SystemEntity)
    private readonly systemRepo: Repository<SystemEntity>,
  ) {}

  public async getAll() {
    const entities = await this.systemRepo.find();

    return entities.map((sys) => SystemMapper.toDomain(sys));
  }

  public async getPostsBySystem(id: string) {
    const entity = await this.systemRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        posts: true,
      },
    });

    return entity ? SystemMapper.toDomain(entity) : null;
  }
}
