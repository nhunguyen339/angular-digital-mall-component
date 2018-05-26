import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../models/book';
import { BookService } from '../models/book.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   book : Book;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook():void {
    let id: string;
    id = this.route.snapshot.paramMap.get('_id');
    this.bookService.getBook(id)
      .subscribe( book => this.book =book );
  }

}
