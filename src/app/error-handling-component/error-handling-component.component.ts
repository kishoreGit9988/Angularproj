import { Component, OnInit } from '@angular/core';
import { ErrorhandlingServiceService } from '../errorhandling-service.service';

@Component({
  selector: 'app-error-handling-component',
  templateUrl: './error-handling-component.component.html',
  styleUrls: ['./error-handling-component.component.css']
})
export class ErrorHandlingComponentComponent implements OnInit {

  constructor(private errorhandlingserviceservice: ErrorhandlingServiceService) { }

  users: any;
  fromSub = '';
  errMsg: any;

  ngOnInit(): void {
    this.errorhandlingserviceservice.getUsers().subscribe(
      (data) => this.users = data, (error) => console.log(this.errMsg = error));

  }





}
