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
  newGenre : Genre;
  selectedGenre : Genre;
  constructor(
    private genreService : GenreService,
    private route: ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.getGenres();
    this.newGenre = new Genre()
    this.newGenre.name = '';
  }

  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres )
  }

  add(): void {
    this.genreService.addGenre(this.newGenre)
      .subscribe( genre =>
      {this.newGenre.name = '';
      this.genres.push(genre)}
    )
  }
  addDisable():boolean {
    return this.newGenre.name.length == 0;
  }
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
