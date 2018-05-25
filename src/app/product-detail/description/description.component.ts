import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../models/book.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  books : Book[] = [];

  constructor( private bookService: BookService ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks():void {
    this.bookService.getBooks()
    .subscribe( books => this.books = books.slice(1,2) );
  }

}
