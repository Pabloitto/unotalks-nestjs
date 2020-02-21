

import { IsNotEmpty, IsString } from 'class-validator';

export class Song {
  @IsNotEmpty()
  @IsString()
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
