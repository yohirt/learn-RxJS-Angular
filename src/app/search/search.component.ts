import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Observable, take, from,first } from 'rxjs';
import { takeLast, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  name: FormControl;
  categories = ['Mobiles', 'TV', 'Charges', 'headphones'];
  category$: Observable<string> = from(this.categories);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('start search'),
    });
    this.searchForm
      .get('name')
      .valueChanges.pipe(
        // takeWhile((v) => this.checkConditions(v)),
        // takeLast(2),
        debounceTime(900)
      )
      .subscribe((data) => {
        this.category$
          .pipe(first())
          .subscribe((data2) => console.log(data2));
        console.log(data);
      });
  }

  checkConditions(value) {
    // console.log(value);
    return value.length < 5 ? true : false;
  }
  readValue() {}
}
