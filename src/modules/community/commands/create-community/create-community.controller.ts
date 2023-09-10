import { Body, Controller, Post, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { routesV1 } from '@config/app.routes';
import { CommandBus } from '@nestjs/cqrs';
import { match, Result } from 'oxide.ts';
import { CreateComunnityCommand } from './create-community.command';
import { CreateCommunityRequestDto } from './create-community.request.dto';
import { IdResponse } from '@src/common/api/id.response.dto';
import { ApiErrorResponse } from '@src/common/api/api-error.response';

@Controller(routesV1.version)
export class CreateCommunityHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create a Community post' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiErrorResponse,
  })
  @Post(routesV1.community.create)
  async create(@Body() body: CreateCommunityRequestDto): Promise<IdResponse> {
    const command = new CreateComunnityCommand(body);

    const result = await this.commandBus.execute(command);

    return match(result, {
      Ok: (id: string) => new IdResponse(id),
      Err: (error: Error) => {
        throw error;
      },
    });
  }
}
