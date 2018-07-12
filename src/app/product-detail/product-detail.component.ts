import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookService } from '../models/book.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  book: Book;
  book$: Observable<Book>;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.getBook();
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.getBook(params.get('_id')))
    );
  }

  getBook(): void {
    let id: string;
    id = this.route.snapshot.paramMap.get('_id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }
  // getBook():void {
  //   let id: string;
  //   id = this.route.snapshot.paramMap.get('_id');
  //   this.bookService.getBook(id)
  //     .subscribe( book => this.book =book );
  // }

}
