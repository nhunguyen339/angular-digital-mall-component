import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../models/book';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent  {
  @Input() book : Book;

}
