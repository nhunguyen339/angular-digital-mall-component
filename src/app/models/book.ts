import { Image } from './image';
import { Comment } from './comment';
import { Size } from './size';
import { Genre } from './genre';

export class Book {
  _id: number;
  title: string;
  author: string;
  publisher: string;
  pages: number;
  weight: number;
  sku: number;
  shortDescription: string;
  fullDescription: string;
  previousPrice: number;
  sellingPrice: number;
  comments: Comment[];
  createDate: number;
  images: Image;
  size: Size[];
  genre: Genre[];
}
