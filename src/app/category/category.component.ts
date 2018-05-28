import { Component, OnInit } from '@angular/core';
import { Book  } from '../models/book';
import { BookService } from '../models/book.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  book: Book;
  constructor(
    private bookService : BookService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  }

  getBook():void {
    let id : string;
    id = this.route.snapshot.paramMap.get('_id');
    this.bookService.getBook(id)
      .subscribe( book => this.book = book );
  }
}
