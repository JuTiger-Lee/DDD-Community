import { AggregateID, AggregateRoot } from '@src/common/ddd';
import { v4 } from 'uuid';
import { CreateUserProps, UserProps } from './user.type';

export class UserEntity extends AggregateRoot<UserProps> {
  protected readonly _id: AggregateID;

  static Create(create: CreateUserProps): UserEntity {
    const id = v4();

    const props: UserProps = { ...create };
    const user = new UserEntity({ id, props });

    return user;
  }

  public validate(): void {
    // ...
  }
}
