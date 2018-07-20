import { Component, OnInit } from '@angular/core';
import { BOOK, Order, _User } from '../../models/cart/order';
import { User } from '../../models/login-logout/user';
import { ShoppingCart } from '../../models/cart/shopping-cart';
import { OrderService } from '../../models/cart/order.service';
import { ShoppingCartService } from '../../models/cart/shopping-cart.service';
import { LoginStatusService } from '../../models/login-logout/login-status.service';
import { UserService } from '../../models/login-logout/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.css']
})
export class CheckoutProductComponent implements OnInit {


  currentUser = new User();
  statusUser: Boolean = false;
  orderCurrent = new Order();
  shoppingCart: ShoppingCart;
  shippingOptions = [
    {method: 'viettel post', value: 20000, time: '2 days'},
    {method: 'PT expression', value: 30000, time: '1 day'}
  ]
  constructor(
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService ,
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
  // initShippingOptions() {

  // }

  // checkShippingOptions() {

  // }

  getUser(): void {
    this.userService.getAll().subscribe(_ => this.currentUser = _.user)
  };
  checkToken() {
    if (localStorage.getItem('_currentUser')) {
      this.statusUser = true;
      this.loginStatusService.setStatus(this.statusUser);
      this.getUser();
    } else {
      this.loginStatusService.setStatus(this.statusUser);
    }
    console.log('check')
  }




  ordered() {
    this.shoppingCartService.updateCart(this.shoppingCart);
    if (this.shoppingCart.items.length > 0) {
      this.orderCurrent.total = this.shoppingCart.total;
      this.orderCurrent._user._id = this.currentUser._id;
      this.orderCurrent._user.email = this.currentUser.email;
      if (this.shoppingCart) {
        for (let i = 0; i < this.shoppingCart.items.length; i++) {
          const books_ = new BOOK();
          books_._book._id = this.shoppingCart.items[i].productId;
          books_._book.title = this.shoppingCart.items[i].title;
          books_.price = this.shoppingCart.items[i].sellingPrice;
          books_.quantity = this.shoppingCart.items[i].quantity;
          this.orderCurrent.books.push(books_);
        }
      }

      this.orderService.addOrder(this.orderCurrent).
        subscribe(data => {
          console.log(`Da dat hang thanh cong\nThanh tien: ${data.total}\nSo luong sach: ${data.books.length}`);
          // this.orderCurrent.total = 0;
          // this.orderCurrent._user = '';
          this.orderCurrent.books = new Array<BOOK>();
          this.orderCurrent._user = new _User();
          this.shoppingCartService.removeShoppingCart();
        });
    }
    
  }
      remove(): void {
        localStorage.removeItem('shoppingCart')
      }


}
