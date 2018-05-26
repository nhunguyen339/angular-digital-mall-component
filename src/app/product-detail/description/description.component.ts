import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  @Input() book : Book;
}
