import { Component, OnInit } from '@angular/core';
import { GenreService } from '../models/genre.service';
import { Genre } from '../models/genre';
import { Banner } from '../models/banner';
import { BannerService } from '../models/banner.service';
import { Observable, Subject } from "rxjs";
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Book } from '../models/book';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  genres : Genre[];
  banners : Banner[] ;
  constructor(
    private genreService : GenreService,
    private bannerService : BannerService,
  ) { }

  ngOnInit():void {
    this.getGenres();
    this.getBanners();
  }

  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres );
  }

  getBanners():void {
    this.bannerService.getBanners()
      .subscribe( banners => this.banners = banners.slice(1,2) );
  }


}
