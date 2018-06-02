import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';
@Component({
  selector: 'app-new-feature-best-product',
  templateUrl: './new-feature-best-product.component.html',
  styleUrls: ['./new-feature-best-product.component.css']
})
export class NewFeatureBestProductComponent implements OnInit {
  @Input() books: Book [] = [];

  constructor() { }

  ngOnInit() {
  }

}
