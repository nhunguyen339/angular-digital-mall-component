import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent {
  @Input() book: Book;
}

