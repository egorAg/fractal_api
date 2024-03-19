import { User } from '../../user/domain/user';

export type LoginResponseType = Readonly<{
  token: string;
  refreshToken: string;
  tokenExpiresIn: string;
  user: User;
}>;
