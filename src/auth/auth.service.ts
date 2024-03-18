import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { AllConfigType } from 'src/config/config.type';
import { Session } from 'src/session/domain/session';
import { SessionService } from 'src/session/session.service';
import { User } from 'src/user/domain/user';
import { UsersService } from 'src/user/user.service';
import { NullableType } from 'src/utils/types/nullable.type';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';
import { AuthUpdateDto } from './dto/auth-update.dto';
import { JwtPayloadType } from './strategies/types/jwt-payload.type';
import { JwtRefreshPayloadType } from './strategies/types/jwt-refresh-payload.type';
import { LoginResponseType } from './types/login-response.type';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private sessionService: SessionService,
    private configService: ConfigService<AllConfigType>,
  ) {}

  async validateLogin(loginDto: AuthEmailLoginDto): Promise<LoginResponseType> {
    const user = await this.usersService.findOne({
      email: loginDto.email,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'notFound',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (!user.password) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: 'incorrectPassword',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: 'incorrectPassword',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const hash = crypto.randomUUID();

    const session = await this.sessionService.create({
      user,
      hash,
    });

    const { token, refreshToken, tokenExpiresIn } = await this.getTokensData({
      id: user.id,
      role: user.role,
      sessionId: session.id,
      hash,
    });

    return {
      refreshToken,
      token,
      tokenExpiresIn,
      user,
    };
  }

  async register(dto: AuthRegisterLoginDto): Promise<LoginResponseType> {
    await this.usersService.create({
      ...dto,
      email: dto.email,
    });

    return await this.validateLogin({
      email: dto.email,
      password: dto.password,
    });
  }

  // async forgotPassword(email: string): Promise<void> {
  // const user = await this.usersService.findOne({
  //   email,
  // });
  // if (!user) {
  //   throw new HttpException(
  //     {
  //       status: HttpStatus.UNPROCESSABLE_ENTITY,
  //       errors: {
  //         email: 'emailNotExists',
  //       },
  //     },
  //     HttpStatus.UNPROCESSABLE_ENTITY,
  //   );
  // }
  // const tokenExpiresIn = this.configService.getOrThrow(
  //   'auth.forgotExpires' as keyof AllConfigType,
  //   {
  //     infer: true,
  //   },
  // );
  // const tokenExpires = Date.now() + ms(tokenExpiresIn);
  // const hash = await this.jwtService.signAsync(
  //   { forgotUserId: user.id },
  //   {
  //     secret: this.configService.getOrThrow<string>(
  //       'auth.forgotSecret' as keyof AllConfigType,
  //       { infer: true },
  //     ),
  //     expiresIn: tokenExpires,
  //   },
  // );
  // await this.mailService.forgotPassword({
  //   to: email,
  //   data: {
  //     hash,
  //     tokenExpires,
  //   },
  // });
  // }

  // async resetPassword(hash: string, password: string): Promise<void> {
  //   let userId: User['id'];

  //   try {
  //     const jwtData = await this.jwtService.verifyAsync<{
  //       forgotUserId: User['id'];
  //     }>(hash, {
  //       secret: this.configService.getOrThrow<string>('auth.forgotSecret', {
  //         infer: true,
  //       }),
  //     });

  //     userId = jwtData.forgotUserId;
  //   } catch {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.UNPROCESSABLE_ENTITY,
  //         errors: {
  //           hash: `invalidHash`,
  //         },
  //       },
  //       HttpStatus.UNPROCESSABLE_ENTITY,
  //     );
  //   }

  //   const user = await this.usersService.findOne({
  //     id: userId,
  //   });

  //   if (!user) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.UNPROCESSABLE_ENTITY,
  //         errors: {
  //           hash: `notFound`,
  //         },
  //       },
  //       HttpStatus.UNPROCESSABLE_ENTITY,
  //     );
  //   }

  //   user.password = password;

  //   await this.sessionService.softDelete({
  //     user: {
  //       id: user.id,
  //     },
  //   });

  //   await this.usersService.update(user.id, user);
  // }

  async me(userJwtPayload: JwtPayloadType): Promise<NullableType<User>> {
    return this.usersService.findOne({
      id: userJwtPayload.id,
    });
  }

  async update(
    userJwtPayload: JwtPayloadType,
    userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
    // if (userDto.password) {
    //   if (!userDto.oldPassword) {
    //     throw new HttpException(
    //       {
    //         status: HttpStatus.UNPROCESSABLE_ENTITY,
    //         errors: {
    //           oldPassword: 'missingOldPassword',
    //         },
    //       },
    //       HttpStatus.UNPROCESSABLE_ENTITY,
    //     );
    //   }

    // const currentUser = await this.usersService.findOne({
    //   id: userJwtPayload.id,
    // });

    // if (!currentUser) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.UNPROCESSABLE_ENTITY,
    //       errors: {
    //         user: 'userNotFound',
    //       },
    //     },
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }

    // if (!currentUser.password) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.UNPROCESSABLE_ENTITY,
    //       errors: {
    //         oldPassword: 'incorrectOldPassword',
    //       },
    //     },
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }

    // const isValidOldPassword = await bcrypt.compare(
    //   userDto.oldPassword,
    //   currentUser.password,
    // );

    // if (!isValidOldPassword) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.UNPROCESSABLE_ENTITY,
    //       errors: {
    //         oldPassword: 'incorrectOldPassword',
    //       },
    //     },
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // } else {
    //   await this.sessionService.softDelete({
    //     user: {
    //       id: currentUser.id,
    //     },
    //     excludeId: userJwtPayload.sessionId,
    //   });
    // }
    // }

    await this.usersService.update(userJwtPayload.id, userDto);

    return this.usersService.findOne({
      id: userJwtPayload.id,
    });
  }

  async refreshToken(
    data: Pick<JwtRefreshPayloadType, 'sessionId' | 'hash'>,
  ): Promise<Omit<LoginResponseType, 'user'>> {
    const session = await this.sessionService.findOne({
      id: data.sessionId,
    });

    if (!session) {
      throw new UnauthorizedException();
    }

    if (session.hash !== data.hash) {
      throw new UnauthorizedException();
    }

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    await this.sessionService.update(session.id, {
      hash,
    });

    const { token, refreshToken, tokenExpiresIn } = await this.getTokensData({
      id: session.user.id,
      role: session.user.role,
      sessionId: session.id,
      hash,
    });

    return {
      token,
      refreshToken,
      tokenExpiresIn,
    };
  }

  async softDelete(user: User): Promise<void> {
    await this.usersService.softDelete(user.id);
  }

  async logout(data: Pick<JwtRefreshPayloadType, 'sessionId'>) {
    return this.sessionService.softDelete({
      id: data.sessionId,
    });
  }

  private async getTokensData(data: {
    id: User['id'];
    role: User['role'];
    sessionId: Session['id'];
    hash: Session['hash'];
  }) {
    const tokenExpiresIn = this.configService.getOrThrow<string>(
      'auth.expires',
      {
        infer: true,
      },
    );

    const [token, refreshToken] = await Promise.all([
      await this.jwtService.signAsync(
        {
          id: data.id,
          role: data.role,
          sessionId: data.sessionId,
        },
        {
          secret: this.configService.getOrThrow<string>('auth.secret', {
            infer: true,
          }),
          expiresIn: tokenExpiresIn,
        },
      ),
      await this.jwtService.signAsync(
        {
          sessionId: data.sessionId,
          hash: data.hash,
        },
        {
          secret: this.configService.getOrThrow<string>('auth.refreshSecret', {
            infer: true,
          }),
          expiresIn: this.configService.getOrThrow<string>(
            'auth.refreshExpires',
            {
              infer: true,
            },
          ),
        },
      ),
    ]);

    return {
      token,
      refreshToken,
      tokenExpiresIn,
    };
  }
}
