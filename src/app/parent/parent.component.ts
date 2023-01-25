import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  fromInput="";
  toChild="";
  childData:any;

  childMsg(event){
    this.childData=event;
  }

  toMyChild(){
    this.toChild=this.fromInput;

  }

  ngOnInit(): void {
  }

}
