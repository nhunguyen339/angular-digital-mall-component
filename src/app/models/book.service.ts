import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  booksUrl = "https://green-web-bookstore.herokuapp.com/api/books";
  constructor (private http: HttpClient ) {}

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

}
