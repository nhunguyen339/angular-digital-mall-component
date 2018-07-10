import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { ShoppingCartService } from '../../models/cart/shopping-cart.service';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent {
  @Input() book: Book;
  inputQuantity: number = 1;
  constructor(
    private shoppingCartService: ShoppingCartService,
  ){}

  addItem(book: Book) {
    this.shoppingCartService.addItem(book, this.inputQuantity);
    this.shoppingCartService.calculateTotal();
  }
}

