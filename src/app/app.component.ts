import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { Observable, of, from, fromEvent } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // # fromEvents
  @ViewChild('validate') validate: ElementRef;
  @ViewChild('getLink') getLinkData: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  rxJsEventObsevable() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    btnObservable$.subscribe((data) => {
      console.log(data);
    });
  }

  getEventObservable() {
    const linkObservable$ = fromEvent(
      this.getLinkData?.nativeElement,
      'mouseover'
    );
    linkObservable$.subscribe((data) => {
      console.log(data);
    });
  }
}
