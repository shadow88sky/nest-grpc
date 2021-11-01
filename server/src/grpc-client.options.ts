import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:8888', // grpc连接ip与端口
    package: 'first',
    protoPath: join(__dirname, './cats/cats.proto'),
  },
};
