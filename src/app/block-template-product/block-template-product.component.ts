import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../models/book.service'
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../models/shopping-cart.service';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
// import { GenreService } from '../models/genre.service';
// import { Genre } from '../models/genre';

@Component({
  selector: 'app-block-template-product',
  templateUrl: './block-template-product.component.html',
  styleUrls: ['./block-template-product.component.css']
})
export class BlockTemplateProductComponent implements OnInit {
  books : Book[] = [];
  // genres: Genre[] =[];

  constructor(
    private bookService: BookService,
    private shoppingCartService: ShoppingCartService
    // private genreSerive: GenreService
   ) { }

  ngOnInit() {
    this.getBooks();
    // this.getGenres();
  }

  getBooks():void {
    this.bookService.getBooks()
    .subscribe( books => this.books = books );
  }

  // getGenres():void {
  //   this.genreSerive.getGenres()
  //     .subscribe( genres => this.genres = genres );
  // }
  // getName():void {
  //   this.genreService.getName
  // }

  public addProductToCart( book: Book ):void {
    this.shoppingCartService.addItem( book, 1 )
  }

  public productInCart(book: Book): Boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.productId === book._id ));
                        obs.complete();
                      } );
                      sub.unsubscribe();
    } );
  }

}


