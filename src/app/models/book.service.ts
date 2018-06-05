import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Genre } from './genre';



@Injectable()
export class BookService {
  booksUrl = "https://green-web-bookstore.herokuapp.com/api/books";

  constructor (private http: HttpClient ) {}

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

}
