import { ValueObject } from '@src/common/ddd';

export interface ImageProps {
  name: string;
  path: string;
  ext: string;
}

export class Image extends ValueObject<ImageProps> {
  get name(): string {
    return this.props.name;
  }

  get path(): string {
    return this.props.path;
  }

  get ext(): string {
    return this.props.ext;
  }

  protected validate(props: ImageProps): void {
    // ...
  }
}
