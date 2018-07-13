import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';
import { GenreService } from '../../models/genre.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {
  @Input() book: Book;
  genres : Genre[];
  constructor(
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this.getGenres();
  }
  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres );
  }

}
