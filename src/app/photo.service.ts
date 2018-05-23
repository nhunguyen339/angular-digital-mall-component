import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoService {
  photosUrl = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http : HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl);
  }

}
