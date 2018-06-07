import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Genre } from './genre';

import "rxjs/add/operator/map";
let count = 0;

@Injectable()
export class BookService {
  booksUrl = "https://green-web-bookstore.herokuapp.com/api/books";
  private books : Observable<Book[]>;

  constructor (
    private http: HttpClient,
  ) {
  }

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBook(id:string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  searchBooks(term:string):Observable<Book[]> {
    if (!term.trim()) {
      return of ([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?title=${term}`)
  }

//   public all(): Observable<Book[]> {
//     return this.cachingServiceBase.cache<Book[]>(() => this.books,
//                               (val: Observable<Book[]>) => this.books = val,
//                               () => this.http
//                                         .get(this.booksUrl)
//                                         .map((response) => response.json()
//                                                                     .map((item) => {
//                                                                       let model = new Book();
//                                                                       model.updateFrom(item);
//                                                                       return model;
//                                                                     } )));
//  }
}
