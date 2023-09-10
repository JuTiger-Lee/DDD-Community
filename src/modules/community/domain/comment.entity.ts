import { Entity } from '@src/common/ddd';

export interface CommentProps {
  contents: string;
  like: number;
}

export class Comment extends Entity<CommentProps> {
  protected readonly _id: string;

  public validate(): void {
    // ...
  }
}
