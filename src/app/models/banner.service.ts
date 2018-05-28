import { Injectable } from '@angular/core';
import { Banner } from './banner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BannerService {
  bannersUrl = "https://green-web-bookstore.herokuapp.com/api/banners";
  constructor(
    private bannerService : BannerService
  ) {}

  getBanners():Observable<Banner[]>
}
