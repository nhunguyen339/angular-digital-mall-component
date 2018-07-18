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
export class PaymentReviewComponent  {
 
}
