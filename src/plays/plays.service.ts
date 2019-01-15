import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Play } from './interfaces/play.interface';
import { CreatePlayDto } from './dto/create-play.dto';
import { Observable } from 'rxjs';

@Injectable()
export class PlaysService {
    constructor(@InjectModel('Play') private readonly playModel: Model<Play>) {}

    create(createPlayDto: CreatePlayDto): Observable<Play> {
        const createdPlay = new this.playModel(createPlayDto);
        return createdPlay.save();
    }

    findAll(): Observable<Play[]> {
        return this.playModel.find().sort('-date').exec();
    }
}
