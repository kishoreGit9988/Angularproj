import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modedriven',
  templateUrl: './modedriven.component.html',
  styleUrls: ['./modedriven.component.css']
})
export class ModedrivenComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  modelForm = this._fb.group({
    username: [],
    age: [],
    mobiles: this._fb.array([
      []
    ])


  })
  ngOnInit(): void {
  }

  get items() {
    return this.modelForm.get('mobiles') as FormArray;
  }

  addingEle() {
    this.items.push(this.items);
  }

  remove(h) {
    this.items.removeAt(h);
  }
  myModel() {
    console.log(this.modelForm);

  }


}







