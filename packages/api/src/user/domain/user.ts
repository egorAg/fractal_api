import { Exclude, Expose } from 'class-transformer';
import { Role } from 'src/roles/domain/role';

export class User {
  id: string;

  @Expose({ groups: ['me', 'admin'] })
  email: string;

  role?: Role;

  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  name: string;

  surname: string;

  telegram?: string;

  instagram?: string;

  phone?: string;

  city?: string;

  ref_id?: string;

  createdAt: Date;

  updatedAt: Date;
}
