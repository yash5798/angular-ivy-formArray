import { Component, VERSION, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  items!: FormArray;
  conditionList = [
    { key: '>', value: '>' },
    { key: '<', value: '<' },
    { key: '==', value: '==' },
  ];
  filterForm = new FormGroup({
    filter: new FormArray([]),
  });
  ngOnInit() {
    this.add();
  }
  onSubmit() {
    console.log(this.filterForm.value);
  }
  genForm() {
    return new FormGroup({
      key: new FormControl('', Validators.required),
      condition: new FormControl('>', Validators.required),
      value: new FormControl('', Validators.required),
    });
  }
  add() {
    this.items = this.filterForm.get('filter') as FormArray;
    this.items.push(this.genForm());
  }
  get filter() {
    return this.filterForm.get('filter') as FormArray;
  }
  remove(i) {
    this.items = this.filterForm.get('filter') as FormArray;
    this.items.removeAt(i);
  }
}
