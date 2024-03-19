import { Role } from 'src/roles/domain/role';

export type UserSession = {
  id: string;
  role: Role;
  sessionId: number;
  iat: number;
  exp: number;
};
