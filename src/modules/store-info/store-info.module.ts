import { Module } from '@nestjs/common';
import { StoreInfoController } from './store-info.controller';
import { StoreInfoService } from './store-info.service';

@Module({
  controllers: [StoreInfoController],
  providers: [StoreInfoService],
})
export class StoreInfoModule {}