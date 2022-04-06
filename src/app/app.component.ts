import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { Observable, of, from, fromEvent, interval } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrOrd = ['Mobile', 'book', 'electronic', 'computers', 'AGD'];
  orders$: Observable<string> = from(this.arrOrd);
  constructor() {}

  ngOnInit(): void {
    this.orders$.subscribe((data) => {
      const seqNum$ = interval(100);
      seqNum$.subscribe((num) => {
        if (num < 2) {
          console.log(data + num);
        }
      });
    });
  }
}
