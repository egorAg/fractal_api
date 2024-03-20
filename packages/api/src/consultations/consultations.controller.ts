import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthorizedUser } from 'src/auth/decorators/authorized.user.decorator';
import { UserSession } from 'src/user/domain/user.session';
import { ConsultationsService } from './consultations.service';

@ApiTags('Consultations')
@Controller({
  path: 'consultation',
  version: '1',
})
export class ConsultationsController {
  constructor(private readonly service: ConsultationsService) {}

  @ApiOperation({
    description: 'Get by topic ID',
    summary: 'Get consultations by topic ID',
  })
  @ApiParam({
    name: 'topicId',
    example: 'some-uu-id-v4',
    description: 'topicId - received from topics/getAll',
  })
  @Get('filter/topic/:id')
  public async getByTopicId(@Param('topicId') id: string) {
    return this.service.getByTopicId(id);
  }

  @ApiOperation({
    description: 'Get all consultations',
    summary: 'Get all consultations, allowed for registration',
  })
  @Get()
  public async consultations() {
    return this.service.getAll();
  }

  @ApiOperation({
    description: 'Register for consultation',
    summary:
      'Allow user to register for consultation, admin get notification in telegram',
  })
  @ApiQuery({
    name: 'id',
    description: 'consultation id',
  })
  @ApiQuery({
    name: 'phone',
    description: 'User phone number',
  })
  @ApiQuery({
    name: 'email',
    description: 'User email',
  })
  @Auth
  @Get('register')
  public async register(
    @AuthorizedUser() user: UserSession,
    @Query() payload: { id: string; phone: string; email: string },
  ) {
    const { id, phone, email } = payload;
    await this.service.register(user, id, phone, email);
  }
}
