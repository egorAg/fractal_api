import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { RoleEnum } from 'src/roles/roles.enum';
import { DeepPartial } from '../utils/types/deep-partial.type';
import { EntityCondition } from '../utils/types/entity-condition.type';
import { NullableType } from '../utils/types/nullable.type';
import { User } from './domain/user';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './infrastructure/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(createProfileDto: CreateUserDto): Promise<User> {
    const clonedPayload: Omit<
      User,
      'id' | 'createdAt' | 'updatedAt' | 'newPassword'
    > = {
      ...createProfileDto,
      role: {
        name: 'User',
        id: RoleEnum.user,
      },
    };

    if (clonedPayload.password) {
      const salt = await bcrypt.genSalt();
      clonedPayload.password = await bcrypt.hash(clonedPayload.password, salt);
    }

    if (clonedPayload.email) {
      const userObject = await this.usersRepository.findOne({
        email: clonedPayload.email,
      });

      if (userObject) {
        throw new HttpException(
          {
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            errors: {
              email: 'emailAlreadyExists',
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }

    return this.usersRepository.create(clonedPayload);
  }

  findOne(fields: EntityCondition<User>): Promise<NullableType<User>> {
    return this.usersRepository.findOne(fields);
  }

  async update(
    id: User['id'],
    payload: DeepPartial<User>,
  ): Promise<User | null> {
    const clonedPayload = { ...payload };

    if (clonedPayload.newPassword) {
      console.log('REGEN');
      const salt = await bcrypt.genSalt();
      console.log(salt);
      clonedPayload.password = await bcrypt.hash(
        clonedPayload.newPassword,
        salt,
      );
      delete clonedPayload.newPassword;
    }

    if (clonedPayload.email) {
      const userObject = await this.usersRepository.findOne({
        email: clonedPayload.email,
      });

      if (userObject?.id !== id) {
        throw new HttpException(
          {
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            errors: {
              email: 'emailAlreadyExists',
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }

    return this.usersRepository.update(id, clonedPayload);
  }

  async softDelete(id: User['id']): Promise<void> {
    await this.usersRepository.softDelete(id);
  }
}
