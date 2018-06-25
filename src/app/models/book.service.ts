import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Genre } from './genre';

import "rxjs/add/operator/map";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type' : 'application/json' })
}

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

  deleteBook( book : Genre ): Observable<Book> {
    //const id = typeof genre === "string" ? genre : genre._id;
   //const id:string;
   const url = `${this.booksUrl}/${book._id}`;
   return this.http.delete<Book>(url, httpOptions)
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
