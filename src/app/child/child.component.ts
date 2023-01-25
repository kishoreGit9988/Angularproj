import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ErrorhandlingServiceService } from '../errorhandling-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges{

  constructor( private errorhandlingServiceService:ErrorhandlingServiceService) { }

  Myname='Kishore';

  @Output() fromChild=new EventEmitter();


  @Input() parentMsg:any

  ngOnInit(): void {
  }

  toParent(){
    this.fromChild.emit("Hiii i am coming from Child")
  }
  ngOnChanges(){
    console.log("ngOnChanges called")
  }






}
