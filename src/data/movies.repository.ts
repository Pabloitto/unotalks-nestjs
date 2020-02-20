import { BaseRepository } from './base.repository';
import { Injectable, Inject } from '@nestjs/common';
import { Movie } from 'src/entities/movie';

@Injectable()
export class MovieRepository extends BaseRepository<Movie>{
  constructor(@Inject('DB') db) {
    super(db, 'movies');
  }
}
