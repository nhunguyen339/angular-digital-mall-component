import { Component, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { BannerService } from '../models/banner.service';
import { GenreService } from '../models/genre.service';
import { Genre } from '../models/genre';
import { BookService } from '../models/book.service';
import { Book } from '../models/book';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  newProducts : Book[];
  featureProducts : Book[];
  bestProducts : Book[];
  genres : Genre[];
  banners : Banner[] ;
  constructor(
    private genreService : GenreService,
    private bannerService : BannerService,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getGenres();
    this.getBanners();
    this.getNewProduct();
    this.getBestProduct();
    this.getFeatureProduct();
  }
  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres );
  }
  getBanners():void {
    this.bannerService.getBanners()
      .subscribe( banners => this.banners = banners );
  }
  getNewProduct():void {
    this.bookService.getBooks()
      .subscribe( newProducts => this.newProducts = newProducts );
  }
  getBestProduct():void {
    this.bookService.getBooks()
      .subscribe( bestProducts => this.bestProducts = bestProducts );
  }
  getFeatureProduct():void {
    this.bookService.getBooks()
      .subscribe( featureProducts => this.featureProducts = featureProducts );
  }
}

