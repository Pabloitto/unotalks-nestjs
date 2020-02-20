import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  NotFoundException,
  ValidationPipe
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { Movie } from "../entities/movie";

@Controller("movies")
export class MoviesController {
  constructor(private _moviesService: MoviesService) {}


  @Get()
  async findAll(): Promise<Movie[]> {
    const movies = await this._moviesService.findAll();
    return movies;
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Movie> {
    const movies = await this._moviesService.findById(id);
    if (!movies) {
      throw new NotFoundException();
    }
    return movies;
  }

  @Delete(":id")
  async deleteById(@Param('id') id: string): Promise<boolean> {
    return this._moviesService.deleteById(id);
  }

  @Post()
  async addMovie(@Body(new ValidationPipe({
    whitelist: true
  })) movie: Movie): Promise<boolean> {
    return await this._moviesService.addMovie(movie);
  }
}
