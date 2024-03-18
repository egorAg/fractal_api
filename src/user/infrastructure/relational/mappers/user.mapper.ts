import { RoleEntity } from 'src/roles/infrastructure/persistence/relational/entities/role.entity';
import { User } from 'src/user/domain/user';
import { UserEntity } from '../entities/user.entity';

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const user = new User();
    user.id = raw.id;
    user.email = raw.email;
    user.role = raw.role;
    user.password = raw.password;
    user.previousPassword = raw.previousPassword;
    user.name = raw.name;
    user.surname = raw.surname;
    user.telegram = raw.telegram;
    user.instagram = raw.instagram;
    user.phone = raw.phone;
    user.city = raw.city;
    user.ref_id = raw.ref_id;
    user.createdAt = raw.createdAt;
    user.updatedAt = raw.updatedAt;

    return user;
  }

  static toPersistence(raw: User): UserEntity {
    let role: RoleEntity | undefined = undefined;

    if (raw.role) {
      role = new RoleEntity();
      role.id = raw.role.id;
    }

    const user = new UserEntity();
    user.id = raw.id;
    user.email = raw.email;
    user.role = role;
    user.password = raw.password;
    user.previousPassword = raw.previousPassword;
    user.name = raw.name;
    user.surname = raw.surname;
    user.telegram = raw.telegram;
    user.instagram = raw.instagram;
    user.phone = raw.phone;
    user.city = raw.city;
    user.ref_id = raw.ref_id;
    user.createdAt = raw.createdAt;
    user.updatedAt = raw.updatedAt;

    return user;
  }
}
