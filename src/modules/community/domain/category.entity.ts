import { Entity } from '@src/common/ddd';

export interface CategoryProps {}

export class Category extends Entity<CategoryProps> {
  public validate(): void {
    // ...
  }
}
