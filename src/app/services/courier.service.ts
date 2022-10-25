import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Courier } from '../models/courier';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  //main upi url to call express api

  uri = 'http://localhost:4000/couriers';

  constructor(private http: HttpClient) { }

  //to get list of couriers
  getCouriers() {
    return this.http.get(`${this.uri}`);
  }

  //to get courier details for single courier using id
  getCourierById(courierid: any): Observable<any> {
    return this.http.get(`${this.uri}/getCourier/${courierid}`).pipe(catchError(this.errorMgmt));
  }

  //to get courier details for single courier using id
  getCourierByPickupLocation(pickupLocation: any): Observable<any> {
    return this.http.get(`${this.uri}/getCourierByPickupLocation/${pickupLocation}`).pipe(catchError(this.errorMgmt));
  }

  //to get courier detals for single courier using id
  getCourierByCustomerId(customerId: any): Observable<any> {
    return this.http.get(`${this.uri}/getCourierByCustomerId/${customerId}`).pipe(catchError(this.errorMgmt));
  }

  //to create/add new courier
  addCourier(courier: Courier): Observable<any> {
    let url = `${this.uri}/addCourier`;
    return this.http.post(url, courier).pipe(catchError(this.errorMgmt));
  }

  //update Courier
  updateCourier(id: any, courier: Courier): Observable<any> {
    let url = `${this.uri}/updateCourier/${id}`;
    return this.http.patch(url, courier).pipe(catchError(this.errorMgmt));
  }

  //delete Courier
  deleteCourier(id: any): Observable<any> {
    let url = `${this.uri}/deleteCourier/${id}`;
    return this.http.delete(url).pipe(catchError(this.errorMgmt));
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
