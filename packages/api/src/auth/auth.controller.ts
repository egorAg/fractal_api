import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Request,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/user/domain/user';
import { NullableType } from '../utils/types/nullable.type';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { AuthorizedUser } from './decorators/authorized.user.decorator';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';
import { AuthUpdateDto } from './dto/auth-update.dto';
import { LoginResponseType } from './types/login-response.type';

class TokenResponse {
  @ApiProperty({
    example: 'some.jwt.toke',
  })
  access: string;
  @ApiProperty({
    example: 'some.jwt.toke',
  })
  refresh_token: string;
  @ApiProperty({
    example: '12h',
  })
  tokenExpiresIn: string;
}

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @SerializeOptions({
    groups: ['me'],
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public login(
    @Body() loginDto: AuthEmailLoginDto,
  ): Promise<LoginResponseType> {
    return this.service.validateLogin(loginDto);
  }

  @ApiOperation({
    summary: 'Register',
    description: 'Register new user, returns no content',
  })
  @Post('signup')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(
    @Body() createUserDto: AuthRegisterLoginDto,
  ): Promise<LoginResponseType> {
    return this.service.register(createUserDto);
  }

  // @Post('forgot/password')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // async forgotPassword(
  //   @Body() forgotPasswordDto: AuthForgotPasswordDto,
  // ): Promise<void> {
  //   return this.service.forgotPassword(forgotPasswordDto.email);
  // }

  // @Post('reset/password')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // resetPassword(@Body() resetPasswordDto: AuthResetPasswordDto): Promise<void> {
  //   return this.service.resetPassword(
  //     resetPasswordDto.hash,
  //     resetPasswordDto.password,
  //   );
  // }

  @ApiOperation({
    summary: 'User info',
    description: 'Return the authorized user',
  })
  @ApiResponse({
    type: User,
    status: HttpStatus.OK,
  })
  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public me(@Request() request): Promise<NullableType<User>> {
    return this.service.me(request.user);
  }

  @ApiOperation({
    summary: 'Refresh access token',
    description:
      'Check does user session is active, if true - return the token',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TokenResponse,
  })
  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Post('refresh')
  @UseGuards(AuthGuard('jwt-refresh'))
  @HttpCode(HttpStatus.OK)
  public refresh(@Request() request): Promise<Omit<LoginResponseType, 'user'>> {
    return this.service.refreshToken({
      sessionId: request.user.sessionId,
      hash: request.user.hash,
    });
  }

  @ApiOperation({
    summary: 'Logout',
    description: 'logout',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiBearerAuth()
  @Post('logout')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  public async logout(@AuthorizedUser() user: User): Promise<void> {
    console.log(user);

    // await this.service.logout({
    //   sessionId: user.,
    // });
  }

  @ApiOperation({
    description:
      'Update user partially, for updating the password, please, send old and new one',
    summary: 'Update',
  })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Patch('me')
  @Auth
  @HttpCode(HttpStatus.OK)
  public update(
    @Request() request,
    @Body() userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
    return this.service.update(request.user, userDto);
  }

  @ApiOperation({
    description: 'Delete user account',
    summary: 'Delete',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiBearerAuth()
  @Delete('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Request() request): Promise<void> {
    return this.service.softDelete(request.user);
  }
}
