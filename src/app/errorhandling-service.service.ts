import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ErrorhandlingServiceService {
  _myUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _http: HttpClient) {

  }




  getUsers() {
    return this._http.get(this._myUrl).pipe(
      catchError(this.handleError)
    );
  }





  private handleError(error: HttpErrorResponse) {
    let errorMsg = "";
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = 'An error occurred:' + error.error
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.

      errorMsg = `Backend returned code ${error.status}, body was: ` + error.error
    }
    // Return an observable with a user-facing error message.
    errorMsg += '\n Something bad happened; please try again later.';
    return throwError(errorMsg);
  }
}
