import { Component, OnInit } from '@angular/core';
import { Book  } from '../models/book';
import { BookService } from '../models/book.service';
import { ActivatedRoute } from '@angular/router';
import { Genre } from '../models/genre';
import { GenreService } from '../models/genre.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  book: Book;
  genre: Genre;
  constructor(
    private bookService : BookService,
    private route : ActivatedRoute,
    private genreService : GenreService
  ) { }

  ngOnInit() {
  }

  getBook():void {
    let id : string;
    id = this.route.snapshot.paramMap.get('_id');
  }
  getGenre():void {
    let id: string;
    id = this.route.snapshot.paramMap.get('_id');
    this.genreService.getGenre(id)
      .subscribe( genre => this.genre = genre );
  }
}
