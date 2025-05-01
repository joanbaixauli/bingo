import { IsOptional, IsNumber, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  hostId: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsNumber()
  cardsPerPlayer?: number;

  @IsOptional()
  @IsBoolean()
  autoStart?: boolean;
}
