import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsMongoId
} from "class-validator";

export class Movie {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsOptional()
  @IsMongoId()
  public id?: string;

  constructor(name: string, id?: string) {
    this.name = name;
    this.id = id;
  }
}
