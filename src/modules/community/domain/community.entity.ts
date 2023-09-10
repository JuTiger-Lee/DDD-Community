import { AggregateID, AggregateRoot } from '@src/common/ddd';
import { v4 } from 'uuid';
import { CommunityProps, CreateCommunityProps } from './community.type';

export class CommunityEntity extends AggregateRoot<CommunityProps> {
  protected readonly _id: AggregateID;

  static Create(create: CreateCommunityProps): CommunityEntity {
    const id = v4();

    const props: CommunityProps = { ...create };
    const community = new CommunityEntity({ id, props });

    return community;
  }

  public validate(): void {
    // ...
  }
}
