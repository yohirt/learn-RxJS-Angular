import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Observable, take, from, elementAt } from 'rxjs';
import { distinct, skip, takeLast, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  name: FormControl;
  /**
   * repeated values
   */
  categories = [
    'Mobiles',
    'Mobiles',
    'TV',
    'Charges',
    'Charges',
    'headphones',
    'Laptops',
  ];
  category$: Observable<string> = from(this.categories);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('start search'),
    });
    this.searchForm
      .get('name')
      .valueChanges.pipe(debounceTime(900))
      .subscribe((data) => {
        this.category$
          /**
           * zwróci unikalne elementy z tablicy i pominie dwa pierwsz
           */
          .pipe(distinct(), skip(2))
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
