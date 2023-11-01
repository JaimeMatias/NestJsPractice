import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostContent } from './PostContent';
import { PostTitle } from './PostTitle';
import { PostId } from './postId';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  //id: PostId;
  id: number;

  @Column()
  @Field((type) => String)
  //title: PostTitle;
  title: string;

  @Column()
  @Field((type) => String)
  //content: PostContent;
  content: string;
  //constructor(id: number, title: string, content: string) {
  //  this.id = new PostId(id);
  //  this.title = new PostTitle(title);
  //  this.content = new PostContent(content);
  //}
}
