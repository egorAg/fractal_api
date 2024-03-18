import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from 'src/user/domain/user';

export const AuthorizedUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as User;
  },
);
