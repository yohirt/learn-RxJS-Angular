import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, take } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  name: FormControl;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('start search'),
    });
    this.searchForm
      .get('name')
      .valueChanges.pipe(
        takeWhile((v) => this.checkConditions(v)),
        debounceTime(900)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  checkConditions(value) {
    // console.log(value);
    return value.length < 5 ? true : false;
  }
  readValue() {}
}
