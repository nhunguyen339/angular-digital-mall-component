import { Component, OnInit } from '@angular/core';
import { GenreService } from '../models/genre.service';
import { Genre } from '../models/genre';
import { Banner } from '../models/banner';
import { BannerService } from '../models/banner.service';
import { Observable, Subject } from "rxjs";
import { switchMap, distinctUntilChanged, debounceTime, first } from 'rxjs/operators';
import { Book } from '../models/book';
import { UserService } from '../models/login-logout/user.service';
import { User } from '../models/login-logout/user';
import { LoginStatusService } from '../models/login-logout/login-status.service';
import { ShoppingCart } from '../models/cart/shopping-cart';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userNew: User = new User();
  genres: Genre[];
  banners: Banner[];
  status: Boolean;

  public cart: Observable<ShoppingCart>;
  public books: Book[];
  public itemCount: number;

  constructor(
    private genreService: GenreService,
    private bannerService: BannerService,
    private userService: UserService,
    private loginStatusService: LoginStatusService,
  ) {
    loginStatusService.status$.subscribe(
      status => {
        this.status = status;
        this.userNew = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.userNew);
        this.getUser();
      }
    );
    
  }

  public ngOnInit(): void {
    this.getGenres();
    this.getBanners();
    
    // this.cart = this.shoppingCartService.get();
    // this.cartSubscription = this.cart.subscribe((cart) => {
    //   this.itemCount = cart.items.map((x) => x.quantity ).reduce((p, n) => p + n, 0);
    // } );


  }
  getUser(): void {
    this.userService.getAll().pipe(first()).subscribe(_ => this.userNew = _.user)
  };

  getGenres(): void {
    this.genreService.getGenres()
      .subscribe(genres => this.genres = genres);
  }

  getBanners(): void {
    this.bannerService.getBanners()
      .subscribe(banners => this.banners = banners.slice(1, 2));
  }
  // ===============

}
