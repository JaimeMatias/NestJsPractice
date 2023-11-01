import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
@Injectable()
export class PostService {
  findAll(): Post[] {
    const post1 = new Post(1, 'asd', 'ASD');
    return [post1];
  }
}
