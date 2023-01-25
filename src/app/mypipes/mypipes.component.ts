import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';


@Component({
  selector: 'app-mypipes',
  templateUrl: './mypipes.component.html',
  styleUrls: ['./mypipes.component.css']
})
export class MypipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  today: number = Date.now();


  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Stable")
    }, 3000)
  });


  user = {
    name: "kishore",
    age: 27,
    salary: 15,
    description: "Web Developer",
    city:"Bangalore"
  }




}
