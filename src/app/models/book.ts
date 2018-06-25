import { Image } from './image';
import { Comment } from './comment';
import { Size } from './size';
import { Genre } from './genre';

export class Book {
  _id: string;
  title: string;
  author: string;
  publisher: string;
  pages: number;
  weight: number;
  releaseDate: string;
  sku: number;
  shortDescription: string;
  fullDescription: string;
  previousPrice: number;
  sellingPrice: number;
  comments: Comment[];
  createDate: string;
  images: Image;
  size: Size[];
  genre: Genre[];



  public updateFrom(src: Book):void {
    this._id = src._id;
    this.title = src.title;
    this.author = src.author;
    this.publisher = src.publisher;
    this.genre = src.genre;
  }
}
