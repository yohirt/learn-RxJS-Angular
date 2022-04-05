import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    this.searchForm.get('name').valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  readValue() {}
}
