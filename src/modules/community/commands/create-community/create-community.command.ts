import { Command, CommandProps } from '@src/common/ddd';

export class CreateComunnityCommand extends Command {
  readonly title: string;
  readonly contents: string;

  constructor(props: CommandProps<CreateComunnityCommand>) {
    super(props);

    this.title = props.title;
    this.contents = props.contents;
  }
}
