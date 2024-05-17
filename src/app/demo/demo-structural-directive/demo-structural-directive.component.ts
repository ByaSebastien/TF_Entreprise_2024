import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-demo-structural-directive',
  templateUrl: './demo-structural-directive.component.html',
  styleUrls: ['./demo-structural-directive.component.scss']
})
export class DemoStructuralDirectiveComponent {

  isDayTime: boolean = true;
  books: Book[];
  day: number;

  constructor() {
    this.day = new Date().getUTCDay();
    this.books = [
      {
        isbn: '123',
        title: "l'art de la guerre",
        author: 'Sun tzu',
        description: '...',
        nbPage: 200
      },
      {
        isbn: '456',
        title: 'Les trois petit cochons',
        author: 'José',
      },
      {
        isbn: '789',
        title: 'Vacances au soleil',
        author: 'Georges',
        nbPage: 100
      }
    ];
    // for (let book of this.books) {
    //   console.log(book);
    // }
    // for (let i in this.books) {
    //   console.log(i);
    // }

  }


  toggleIsDayTime() {
    this.isDayTime = !this.isDayTime;
  }

  byISBN(book: any) {
    return book.isbn;
  }
}
