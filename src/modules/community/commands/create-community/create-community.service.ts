import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateComunnityCommand } from './create-community.command';
import { CommunityEntity } from '../../domain/community.entity';

@CommandHandler(CreateComunnityCommand)
export class CreateCommunityService implements ICommandHandler {
  execute(command: CreateComunnityCommand): Promise<any> {}
}
