import { ValueObject } from '@src/common/ddd';

export interface LikeProps {}

export class Like extends ValueObject<LikeProps> {
  protected validate(props: LikeProps): void {
    // ...
  }
}
