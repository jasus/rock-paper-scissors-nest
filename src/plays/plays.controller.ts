import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePlayDto } from './dto/create-play.dto';
import { Observable } from 'rxjs';
import { Play } from './interfaces/play.interface';
import { PlaysService } from './plays.service';

@Controller('plays')
export class PlaysController {
    constructor(private readonly playsService: PlaysService) {}

    @Post()
    create(@Body() createPlayDto: CreatePlayDto): Observable<Play> {
      return this.playsService.create(createPlayDto);
    }

    @Get()
    findAll(): Observable<Play[]> {
        return this.playsService.findAll();
    }

    @Get('/hand')
    getHand(): number {
        return Math.floor(Math.random() * 6 / 2);
    }
}
