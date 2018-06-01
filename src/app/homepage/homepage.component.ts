import { Component, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { BannerService } from '../models/banner.service';
import { GenreService } from '../models/genre.service';
import { Genre } from '../models/genre';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  genres : Genre[];
  banners : Banner[] ;
  constructor(
    private genreService : GenreService,
    private bannerService : BannerService
  ) { }

  ngOnInit() {
    this.getGenres();
    this.getBanners();
  }
  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres );
  }

  getBanners():void {
    this.bannerService.getBanners()
      .subscribe( banners => this.banners = banners );
  }
}

