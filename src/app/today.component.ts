import { Component, Input } from '@angular/core';

@Component({
  selector: 'today',
  template: `<h1>Today id good day {{today | date: 'EEEE'}}!</h1><p>Today is {{today | date}}</p>
  <p>The time is {{today | date:'h:mm a z'}}</p>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TodayComponent {
  @Input() today: string;
}
