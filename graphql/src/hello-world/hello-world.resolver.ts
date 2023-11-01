import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Hola Mundo es lo que retorna',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }
  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'randomFromZeroTo' })
  getrandomFromZeroTo(
    @Args('loweNumber', { nullable: true, type: () => Int })
    lowerNumer: number = 0,
    @Args('upperNumber', { nullable: true, type: () => Int })
    upperNumber: number = 10,
  ): number {
    return Math.trunc(lowerNumer + Math.random() * (upperNumber - lowerNumer));
  }
}
