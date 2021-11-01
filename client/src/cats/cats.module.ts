import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { ClentServe } from '../grpc-client.options';

@Module({
  controllers: [CatsController],
  providers: [ClentServe],
})
export class CatsModule {}
