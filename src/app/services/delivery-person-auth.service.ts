import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { DeliveryPerson } from '../models/deliveryPerson';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonAuthService {

  API_URL : string ='http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentDeliveryPerson = {};
  deliveryPerson = DeliveryPerson;
  http : any;

  constructor(private httpClient : HttpClient,public router : Router) { }

  register(deliveryPerson : DeliveryPerson): Observable<any>{
    this.router.navigateByUrl('/login-delivery-person');
    return this.httpClient.post(`${this.API_URL}/deliveryPerson/auth/register/`,deliveryPerson).pipe(
      catchError(this.errorMgmt)
    )
  }

  login(deliveryPerson : DeliveryPerson) {
    return this.httpClient.post<any>(`${this.API_URL}/deliveryPerson/auth/login/`, deliveryPerson)
      .subscribe((res: any) => {
        localStorage.setItem('tokenDP', res.accessToken)
        localStorage.setItem('deliveryPersonId', res._id)
        this.router.navigateByUrl('/view-profile-delivery-person');
        console.log("login working")
        return res.deliveryPerson;
      })
  }

  getAccessToken() {
    return localStorage.getItem('tokenDP');
  }

  logout() {
    if (localStorage.removeItem('tokenDP') == null && localStorage.removeItem('deliveryPersonId') == null) {
      this.router.navigate(['/']);
    }
  }

  //error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Get client side error
      errorMessage = error.error.message;
    } else {
      //Get server side error
      errorMessage = `Error Code : ${error.status}\n Message:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    })
  }

}
