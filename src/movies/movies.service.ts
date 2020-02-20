import { Injectable } from '@nestjs/common';
import { Movie } from '../entities/movie';
import { MovieRepository } from 'src/data/movies.repository';

@Injectable()
export class MoviesService {
  constructor(private readonly _moviesService: MovieRepository) {}
  async addMovie(movie: Movie): Promise<boolean> {
    return await this._moviesService.create(movie);
  }

  async findAll(): Promise<Array<Movie>> {
    return await this._moviesService.findAll((item) => {
      return new Movie(item.name, item._id.toString());
    });
  }

  async deleteById(id: string): Promise<boolean> {
    return await this._moviesService.deleteBy(id);
  }

  async findById(id: string): Promise<Movie> {
    return this._moviesService.findBy(id, (item) => {
      if (!item) return null;
      return new Movie(item.name, item._id.toString());
    });
  }
}
