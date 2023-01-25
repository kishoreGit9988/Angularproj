import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  constructor() { }
  myc2='c2'
  myColor=false;

  customColor='blue'

  ngOnInit(): void {
  }

}
