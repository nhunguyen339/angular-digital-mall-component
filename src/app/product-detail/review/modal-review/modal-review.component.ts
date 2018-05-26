import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-modal-review',
  templateUrl: './modal-review.component.html',
  styleUrls: ['./modal-review.component.css']
})
export class ModalReviewComponent {
  @Input() book : Book;

}
