import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../models/book.service';
import { Book } from '../models/book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {
  @Input() book: Book;


  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location :Location,
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook():void {
    let id :string;
    id = this.route.snapshot.paramMap.get('_id')
    this.bookService.getBook(id)
      .subscribe( book => this.book = book );
  }

}
