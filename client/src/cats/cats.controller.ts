import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClentServe } from '../grpc-client.options';

@Controller('cats')
export class CatsController implements OnModuleInit {
  private catService;
  constructor(@Inject(ClentServe) private readonly clentServe: ClentServe) {}

  onModuleInit() {
    // 可以在程序中创建接口CatsService, 这样调用方法时方便,有提示, 没有也可以
    // this.catService = this.clentServe.client.getService<CatsService>('CatsService')
    this.catService = this.clentServe.client.getService('CatsService');
  }

  @Get()
  index() {
    return this.catService.findOne({ id: 2 });
  }
}
