import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaysController } from './plays.controller';
import { PlaysService } from './plays.service';
import { PlaySchema } from './schemas/play.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Play', schema: PlaySchema }])],
  controllers: [PlaysController],
  providers: [PlaysService],
})
export class PlaysModule {}
