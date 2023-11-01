import { PostContent } from './PostContent';
import { PostTitle } from './PostTitle';
import { PostId } from './postId';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: PostId;
  @Field((type) => String)
  title: PostTitle;
  @Field((type) => String)
  content: PostContent;

  constructor(id: number, title: string, content: string) {
    this.id = new PostId(id);
    this.title = new PostTitle(title);
    this.content = new PostContent(content);
  }
}
