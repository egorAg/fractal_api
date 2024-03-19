import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/domain/user';
import { UserEntity } from 'src/user/infrastructure/relational/entities/user.entity';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { FindOptionsWhere, Not, Repository } from 'typeorm';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Session } from '../../../../domain/session';
import { SessionRepository } from '../../session.repository';
import { SessionEntity } from '../entities/session.entity';
import { SessionMapper } from '../mappers/session.mapper';

@Injectable()
export class SessionRelationalRepository implements SessionRepository {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>,
  ) {}

  async findOne(
    options: EntityCondition<Session>,
  ): Promise<NullableType<Session>> {
    const entity = await this.sessionRepository.findOne({
      where: options as FindOptionsWhere<SessionEntity>,
    });

    return entity ? SessionMapper.toDomain(entity) : null;
  }

  async create(data: Session): Promise<Session> {
    const persistenceModel = SessionMapper.toPersistence(data);
    return SessionMapper.toDomain(
      await this.sessionRepository.save(
        this.sessionRepository.create(persistenceModel),
      ),
    );
  }

  async update(
    id: Session['id'],
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null> {
    const entity = await this.sessionRepository.findOne({
      where: { id: Number(id) },
    });

    if (!entity) {
      throw new Error('Session not found');
    }

    const updatedEntity = await this.sessionRepository.save(
      this.sessionRepository.create(
        SessionMapper.toPersistence({
          ...SessionMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return SessionMapper.toDomain(updatedEntity);
  }

  async softDelete({
    excludeId,
    ...criteria
  }: {
    id?: Session['id'];
    user?: Pick<User, 'id'>;
    excludeId?: Session['id'];
  }): Promise<void> {
    await this.sessionRepository.softDelete({
      ...(criteria as {
        id?: SessionEntity['id'];
        user?: Pick<UserEntity, 'id'>;
      }),
      id: criteria.id
        ? (criteria.id as SessionEntity['id'])
        : excludeId
        ? Not(excludeId as SessionEntity['id'])
        : undefined,
    });
  }
}
