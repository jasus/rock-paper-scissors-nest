import { IsString, IsDate } from 'class-validator';

export class CreatePlayDto {
    @IsString() message: string;
    @IsDate() date: Date;
    @IsString() handPlayer: string;
    @IsString() handRival: string;
}
