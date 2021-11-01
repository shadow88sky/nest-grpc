import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class CatsController {
  constructor() {}

  // @GrpcMethod('CatsService', 'FindOne')
  // GrpcMethod中第一个是.proto中服务, 第二个参数是暴露方法名, 不写的话默认是方法的首字母大写
  @GrpcMethod('CatsService', 'FindOne')
  findOne(data: { id: number }, metdata: any) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'fff' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
