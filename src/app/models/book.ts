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
  images: Image = new Image();
  size: Size = new Size();
  genre: Genre = new Genre();
}
