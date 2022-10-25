import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL : string ='http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentCustomer = {};
  customer = Customer;
  http : any;

  constructor(private httpClient : HttpClient,public router : Router) { 

  }

  register(customer : Customer): Observable<any>{
    this.router.navigateByUrl('/login');
    return this.httpClient.post(`${this.API_URL}/auth/register/`,customer).pipe(
      catchError(this.errorMgmt)
    )
  }

  login(customer : Customer) {
    return this.httpClient.post<any>(`${this.API_URL}/auth/login/`, customer)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('customerId', res._id)
        this.router.navigateByUrl('/view-profile');
        console.log("login working")
        return res.customer;
      })
  }

  getAccessToken() {
    return localStorage.getItem('token');
  }
  getUserId() {
    return localStorage.getItem('customerId');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }
  clearSession(): void {
    localStorage.clear();
  }


  logout() {
    if (localStorage.removeItem('token') == null && localStorage.removeItem('customerId') == null) {
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
