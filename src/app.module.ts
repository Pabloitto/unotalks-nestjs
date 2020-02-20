import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MongoClient } from 'mongodb';
import { MovieRepository } from './data/movies.repository';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [
    {
      provide: 'DB',
      useFactory: async () => {
        const connection = await MongoClient.connect("mongodb://moviestest:Test.123@ds239638.mlab.com:39638/moviesdb");
        return connection.db('moviesdb');
      }
    },
    AppService,
    MoviesService,
    MovieRepository
  ]
})
export class AppModule {}
