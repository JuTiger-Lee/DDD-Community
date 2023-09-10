import { CommunityRepositoryable } from '../domain/interface/community.repository';

export class CommunityRepository implements CommunityRepositoryable {
  create(): Promise<void> {
    throw new Error('Create mthod is not implemtns');
  }
}
