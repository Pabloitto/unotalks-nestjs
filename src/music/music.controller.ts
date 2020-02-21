import { Controller, Get, Param, ParseIntPipe, Post, Body, ValidationPipe } from '@nestjs/common';
import { Song } from 'src/entities/song';

@Controller('music')
export class MusicController {
  @Get(":id")
  async findSongById(@Param('id', new ParseIntPipe()) id: number) : Promise<boolean> {
    console.log(id, typeof id);
    return true;
  }

  @Post()
  async addSong(@Body(
    new ValidationPipe({
      whitelist: true
    })
  ) payload: Song) {
    console.log(payload);
  }
}
