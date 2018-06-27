import { Component, OnInit } from '@angular/core';
import { GenreService } from '../models/genre.service';
import { Genre } from '../models/genre';
import { Banner } from '../models/banner';
import { BannerService } from '../models/banner.service';
import { Observable, Subject, Subscription } from "rxjs";
import { switchMap, distinctUntilChanged, debounceTime, first } from 'rxjs/operators';
import { Book } from '../models/book';
import { ShoppingCart } from '../models/shopping-cart';
import { BookService } from '../models/book.service';
import { ShoppingCartService } from '../models/shopping-cart.service';
import { UserService } from '../models/login-logout/user.service';
import { User } from '../models/login-logout/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userNew = new User();
  genres : Genre[];
  banners : Banner[] ;

  public cart: Observable<ShoppingCart>;
  public books: Book[];
  public itemCount: number;

  private cartSubscription: Subscription;

  constructor(
    private genreService : GenreService,
    private bannerService : BannerService,

    private bookService: BookService,
    private shoppingCartService: ShoppingCartService,
    private userService : UserService
  ) { }

  public ngOnInit():void {
    this.getGenres();
    this.getBanners();
    this.getBooks();
    this.getUser();
    // this.cart = this.shoppingCartService.get();
    // this.cartSubscription = this.cart.subscribe((cart) => {
    //   this.itemCount = cart.items.map((x) => x.quantity ).reduce((p, n) => p + n, 0);
    // } );


  }
  getUser():void {
    this.userService.getAll().pipe(first()).subscribe(_ => this.userNew = _.user )
  };

  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres );
  }

  getBooks():void {
    this.bookService.getBooks()
    .subscribe( books => this.books = books.slice(1,5) );
  }

  getBanners():void {
    this.bannerService.getBanners()
      .subscribe( banners => this.banners = banners.slice(1,2) );
  }
// ===============
  public ngOnDestroy(): void {
   if (this.cartSubscription) {
     this.cartSubscription.unsubscribe();
   }
  }
}
