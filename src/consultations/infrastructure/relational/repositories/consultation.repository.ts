import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultation } from 'src/consultations/domain/consultation';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { FindOptionsWhere, Repository } from 'typeorm';
import { ConsultationRepository } from '../../consultation.repository';
import { ConsultationEntity } from '../entities/consultation.entity';
import { ConsultationMapper } from '../mappers/consultation.mapper';

@Injectable()
export class ConsultationRelationalRepository
  implements ConsultationRepository
{
  constructor(
    @InjectRepository(ConsultationEntity)
    private readonly repo: Repository<ConsultationEntity>,
  ) {}

  async findAll(): Promise<Consultation[]> {
    const entities = await this.repo.find({
      relations: {
        topic: true,
      },
    });

    return entities.map((record) => ConsultationMapper.toDomain(record));
  }

  async create(data: Consultation): Promise<Consultation> {
    return ConsultationMapper.toDomain(
      await this.repo.save(
        this.repo.create(ConsultationMapper.toPersistance(data)),
      ),
    );
  }

  async findOne(
    fields: EntityCondition<Consultation>,
  ): Promise<NullableType<Consultation>> {
    const entity = await this.repo.findOne({
      where: fields as FindOptionsWhere<ConsultationEntity>,
    });

    return entity ? ConsultationMapper.toDomain(entity) : null;
  }

  async update(
    id: string,
    payload: Partial<Consultation>,
  ): Promise<Consultation | null> {
    const entity = await this.repo.findOne({
      where: { id: String(id) },
    });

    if (!entity) {
      throw new Error('User not found');
    }

    const updatedEntity = await this.repo.save(
      this.repo.create(
        ConsultationMapper.toPersistance({
          ...ConsultationMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return ConsultationMapper.toDomain(updatedEntity);
  }

  async softDelete(id: string): Promise<void> {
    await this.repo.softDelete({ id: id });
  }
}
