import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
