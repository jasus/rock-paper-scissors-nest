import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaysModule } from './plays/plays.module';

@Module({
  imports: [PlaysModule, MongooseModule.forRoot('mongodb://localhost/plays')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
