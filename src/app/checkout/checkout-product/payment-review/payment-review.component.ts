import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../models/cart/order.service';
import { Order, BOOK } from '../../../models/cart/order';
import { ShoppingCartService } from '../../../models/cart/shopping-cart.service';
import { ShoppingCart } from '../../../models/cart/shopping-cart';
import { LoginStatusService } from '../../../models/login-logout/login-status.service';
import { User } from '../../../models/login-logout/user';
import { UserService } from '../../../models/login-logout/user.service';
import { switchMap, first } from 'rxjs/operators';

@Component({
  selector: 'app-payment-review',
  templateUrl: './payment-review.component.html',
  styleUrls: ['./payment-review.component.css']
})
export class PaymentReviewComponent implements OnInit {
  userNew = new User();
  statusUser: Boolean = false;
  orderCurrent = new Order();
  shoppingCart: ShoppingCart;
  constructor(
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService,
    private loginStatusService: LoginStatusService,
    private userService: UserService,
  ) {
    shoppingCartService.totalStatus$.subscribe(
      status => {
        this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
      }
    )
  }

  ngOnInit() {
    this.checkToken();
    this.shoppingCartService.initCart();
    this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
  }
  getUser(): void {
    this.userService.getAll().pipe(first()).subscribe(_ => this.userNew = _.user)
  };
  checkToken() {
    if (localStorage.getItem('currentUser')) {
      this.statusUser = true;
      this.loginStatusService.setStatus(this.statusUser);
      this.getUser();
    } else {
      this.loginStatusService.setStatus(this.statusUser);
    }
    console.log('check')
  }




  ordered() {
    // const order = new Order();
    //
    console.log(this.shoppingCart.total)
    console.log(this.userNew._id)
    this.orderCurrent.total = this.shoppingCart.total;
    this.orderCurrent._user = this.userNew._id;
    if (this.shoppingCart) {
      for (let i = 0; i < this.shoppingCart.items.length; i++) {
        const books_ = new BOOK();
        books_._book = this.shoppingCart.items[i]._id;
        books_.price = this.shoppingCart.items[i].sellingPrice;
        books_.quantity = this.shoppingCart.items[i].quantity;
        this.orderCurrent.books.push(books_);
      }
    }

    this.orderService.addOrder(this.orderCurrent).
      subscribe(data => console.log(`Da dat hang thanh cong\nThanh tien: ${data.total}\nSo luong sach: ${data.books.length}`));
    
  }

}
