import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.modules';
import { CommunityModule } from './modules/community/community.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [UserModule, CommunityModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
