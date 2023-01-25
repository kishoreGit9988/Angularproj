import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userFormData = {
    username: "kishore",
    age: 28,
    phone: 850191,
    street: "Hyderabad",
  }

  userFormData2 = {
    username: "Shyam",
    age: 28,
    phone: 850191,
    street: "Hyderabad",
  }

  myFormData(f: NgForm) {
    console.log(f)

  }

}
