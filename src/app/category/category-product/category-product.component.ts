import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  @Input() book:Book;
  constructor() { }

  ngOnInit() {
  }

}
