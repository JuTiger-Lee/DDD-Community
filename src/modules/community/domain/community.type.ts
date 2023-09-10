import { Category } from './category.entity';
import { Comment } from './comment.entity';
import { Image } from './value-object/image.value-object';
import { Like } from './value-object/like.value-object';

export interface CommunityProps {
  userId: number;

  title: string;
  contents: string;

  like: Like;
  category: Category;
  comment: Comment;
  images: Image;
  state: boolean;
}

export interface CreateCommunityProps {
  userId: number;

  title: string;
  contents: string;

  like: Like;
  category: Category;
  comment: Comment;
  images: Image;
  state: boolean;
}
