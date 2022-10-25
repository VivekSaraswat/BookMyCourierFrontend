import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError} from 'rxjs';
import { Customer } from '../models/customer';
import { catchError,map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //main upi url to call express api
  isUserLogged = new Subject<boolean>();
  API_URL = 'http://localhost:4000/customers';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  customers: Customer[] = [];
  currentCustomerId!: any;
  id!: number;


  constructor(
    private httpClient :HttpClient,
    public router : Router,
    private authService : AuthService
    ) { }

    ngOnInit(): void {
      this.currentCustomerId = this.getCustomer(this.id);
      console.log(this.currentCustomerId);
    }

    clearSession(): void {
      localStorage.clear();
    }
    getAccessToken() {
      return localStorage.getItem('token');
    }
    getAuthHeader(): HttpHeaders {
      const headers = new HttpHeaders(
        {
          Authorization: ''+this.authService.getAccessToken()
        }
      );
      return headers;
    }

    isLoggedIn(): boolean {
      try {
        if (localStorage.getItem('customerId')) {
          return true;
        }
        return false;
      } catch (err) {
        return false;
      }
    }

    // Get Customer
    getCustomer(id: number) {
      const customerId = localStorage.getItem('customerId')
      return this.httpClient.get(`${this.API_URL}/getCustomer/${customerId}`, {headers: this.getAuthHeader()}).pipe(catchError(this.errorMgmt));
    }

    // Update Customer
    updateCustomer(id: any, data: any): Observable<any> {
      const customerId = localStorage.getItem('customerId')
      let url = `${this.API_URL}/updateCustomer/${customerId}`;
      return this.httpClient.patch(url, data, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
    }
  
    getAllCustomers(): Observable<any> {
      let url = `${this.API_URL}/`;
      return this.httpClient.get(url, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
    }
  
    deleteCustomer(id: string){
      return this.httpClient.delete(`${this.API_URL}/deleteCustomer/${id}`, {headers: this.getAuthHeader()}).pipe(catchError(this.errorMgmt));
    }

    //error handling
    errorMgmt(error:HttpErrorResponse){
      let errorMessage = '';
      if(error.error instanceof ErrorEvent){
        //Get client side error
        errorMessage = error.error.message;
      }else{
        //Get server side error
        errorMessage = `Error Code : ${error.status}\n Message:${error.message}`;
      }
      console.log(errorMessage);
      return throwError(()=>{
        return errorMessage;
      })
    }

}
