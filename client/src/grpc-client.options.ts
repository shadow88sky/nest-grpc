import { Injectable } from '@nestjs/common';
import {
  Client,
  ClientGrpc,
  ClientOptions,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path';
console.log(join(__dirname, './cats/cats.proto'));

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:8888', // grpc连接ip与端口
    package: 'first',
    protoPath: join(__dirname, './cats/cats.proto'),
  },
};

@Injectable()
export class ClentServe {
  // 客户端 实例 使用@Client()装饰器
  @Client(grpcClientOptions) public readonly client: ClientGrpc;
}
