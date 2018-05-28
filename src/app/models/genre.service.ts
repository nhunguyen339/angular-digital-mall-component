import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Genre } from './genre';

@Injectable()
export class GenreService {
  genresUrl = "https://green-web-bookstore.herokuapp.com/api/genres";

  constructor ( private http : HttpClient ) {}

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  };

  getGenre(id:string): Observable<Genre> {
    const url = `${this.genresUrl}/${id}`
    return this.http.get<Genre>(url);
  };

  // getName(name:string): Observable<Genre> {
  //   const url = `${this.genresUrl}/${name}`;
  //   return this.http.get<Genre>(url)
  // };



}
