import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from '../models/genre.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common'
@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  genres : Genre[] =[];
  name:string;
  selectedGenre : Genre;

  constructor(
    private genreService : GenreService,
    private route: ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.getGenres();
    // this.newGenre = new Genre()
    // this.newGenre.name = '';
  }

  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres )
  }

  add(): void {
    if ( this.name.length > 0 ) {
      let newGenre = new Genre(this.name);
      this.genreService.addGenre(newGenre)
        .subscribe( genre =>
        {
        this.name ="";
        this.genres.push(genre)}
      )
    }
  }
  // addDisable():boolean {
  //   return this.newGenre.name.length == 0;
  // }
  delete(genre: Genre):void {
    this.genres = this.genres.filter( g => g !== genre );
    this.genreService.deleteGenre(genre).subscribe();
  }
  onSelect(genre):void {
    this.selectedGenre = genre;
  }

 save():void {
   this.genreService.updateGenre(this.selectedGenre)
    .subscribe(
    )
 }

 goBack() {
   return this.location.back();
 }
}
