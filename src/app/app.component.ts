import { Component, VERSION } from '@angular/core';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular :) ' + VERSION.major;
  today: number = Date.now();
  agentName: string;
  agents: Observable<string>;

  constructor() {}
  ngOnInit(): void {
    this.agents = new Observable(function (observer) {
      try {
        setInterval(() => {
          observer.next('Ram');
        }, 500);

        setInterval(() => {
          observer.next('Mark');
        }, 3000);

        observer.next('Sita');
      } catch (e) {
        observer.error(e);
      }
    });

    this.agents.subscribe((data) => {
      this.agentName = data;
    });
  }
}
