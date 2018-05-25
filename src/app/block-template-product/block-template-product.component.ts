import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../models/book.service'


@Component({
  selector: 'app-block-template-product',
  templateUrl: './block-template-product.component.html',
  styleUrls: ['./block-template-product.component.css']
})
export class BlockTemplateProductComponent implements OnInit {
  books : Book[] = [];

  constructor( private bookService: BookService ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks():void {
    this.bookService.getBooks()
    .subscribe( books => this.books = books.slice(7,11) );
  }

}
