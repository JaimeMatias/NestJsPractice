import { Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Query } from '@nestjs/graphql';
import { Post } from './post.entity';
@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}
  @Query((returns) => [Post])
  posts() {
    return this.postService.findAll();
  }
}
