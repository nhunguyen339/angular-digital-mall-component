import { Component, OnInit } from '@angular/core';
import { GenreService } from '../models/genre.service';
import { Genre } from '../models/genre';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  genres : Genre[];
  constructor(
    private genreService : GenreService
  ) { }

  ngOnInit() {
    this.getGenres();
  }
  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres );
  }
}
