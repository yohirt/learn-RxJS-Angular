import { Component, VERSION } from '@angular/core';
import { Observable, of, from } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular :) ' + VERSION.major;
  today: number = Date.now();
  agentName: string;
  nameOrder: string;

  students: Observable<string[]> = of(['Mark', 'Ram', 'Sita', 'Lisa']);

  studentObj = {
    id: 10,
    name: 'Ram',
  };

  $orders$: Observable<string> = from(['Fasion', 'Electronic', 'Mobile']);
  // agents: Observable<string>;
  student$: Observable<any> = of(this.studentObj);

  constructor() {}
  ngOnInit(): void {
    this.students.subscribe((data) => {
      console.log(data);
    });
    this.student$.subscribe((data) => {
      console.log(data);
    });

    this.$orders$.subscribe((data) => {
      setInterval(() => {
        this.nameOrder = data;
      }, 2000);
    });
  }
}
