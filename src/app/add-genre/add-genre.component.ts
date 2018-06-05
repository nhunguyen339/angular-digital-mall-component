import { Component, OnInit } from '@angular/core';
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
  genre : Genre;
  ten:string;
  selectedGenre : Genre;
  constructor(
    private genreService : GenreService,
    private route: ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.getGenres();
    this.getGenre();
  }

  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres )
  }
  getGenre():void {
    let id: string;
    id = this.route.snapshot.paramMap.get('_id');
    this.genreService.getGenre(id)
      .subscribe( genre => this.genre =genre );
  }
  add(name : string ): void {
    name = name.trim();
    if (!name) {return;}
    this.genreService.addGenre({name} as Genre)
      .subscribe( genre =>
      { this.genres.push(genre)} //==> push du lieu vao trong may, chua len server
        )
  }
  addDisable(ten:string):boolean {
    return !this.ten;
  }
  delete(genre: Genre):void {
    this.genres = this.genres.filter( g => g !== genre );
    this.genreService.deleteGenre(genre).subscribe();
  }
  onSelect(genre):void {
    this.selectedGenre = genre;
  }

 save():void {
   this.genreService.updateGenre(this.genre)
    .subscribe(_ => this.goBack()
    )
 }

 goBack() {
   return this.location.back();
 }
}
