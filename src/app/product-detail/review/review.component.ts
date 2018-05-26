import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../models/book';
import { BookService } from '../../models/book.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() book : Book;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  getBook():void {
    let id: string;
    id = this.route.snapshot.paramMap.get('_id');
    this.bookService.getBook(id)
      .subscribe( book => this.book =book );
  }
}
