import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Books } from '../types/Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnDestroy {
  @Input() bookk: Books = {} as Books;
  @Output() emitBook = new EventEmitter<Books>();

  ngOnDestroy(): void {
    console.log('Kilsd');
  }

  addToCart() {
    this.emitBook.emit(this.bookk);
  }
}
