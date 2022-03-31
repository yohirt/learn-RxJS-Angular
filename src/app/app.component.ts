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

  students: Observable<string[]> = of(['Mark', 'Ram', 'Sita', 'Lisa']);

  studentObj = {
    id: 10,
    name: 'Ram',
  };

  agents: Observable<string>;
  student$: Observable<any> = of(this.studentObj);

  constructor() {}
  ngOnInit(): void {
    this.students.subscribe((data) => {
      console.log(data);
    });
    this.student$.subscribe((data) => {
      console.log(data);
    });
    /*
    
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
  
    */
  }
}
