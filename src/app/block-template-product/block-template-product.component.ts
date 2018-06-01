import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../models/book.service'
// import { GenreService } from '../models/genre.service';
// import { Genre } from '../models/genre';

@Component({
  selector: 'app-block-template-product',
  templateUrl: './block-template-product.component.html',
  styleUrls: ['./block-template-product.component.css']
})
export class BlockTemplateProductComponent implements OnInit {
  books : Book[] = [];
  // genres: Genre[] =[];

  constructor(
    private bookService: BookService,
    // private genreSerive: GenreService
   ) { }

  ngOnInit() {
    this.getBooks();
    // this.getGenres();
  }

  getBooks():void {
    this.bookService.getBooks()
    .subscribe( booksnhu => this.books = booksnhu.slice(1,5) );
  }

  // getGenres():void {
  //   this.genreSerive.getGenres()
  //     .subscribe( genres => this.genres = genres );
  // }
  // getName():void {
  //   this.genreService.getName
  // }

}


