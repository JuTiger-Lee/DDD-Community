import { Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { routesV1 } from '@src/configs/app.routes';
import { CommandBus } from '@nestjs/cqrs';
import { IdResponse } from '@src/common/api/id.response.dto';
import { ApiErrorResponse } from '@src/common/api/api-error.response';

@Controller(routesV1.version)
export class CreateUserController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiErrorResponse,
  })
  @Post(routesV1.user.root)
  create() {}
}
