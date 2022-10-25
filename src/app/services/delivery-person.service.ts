import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, catchError, Observable, throwError } from 'rxjs';
import { DeliveryPerson } from '../models/deliveryPerson';
import { DeliveryPersonAuthService } from './delivery-person-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonService {

  isUserLogged = new Subject<boolean>();
  API_URL = 'http://localhost:4000/deliveryPersons';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  deliveryPersons: DeliveryPerson[] = [];
  currentDeliveryPersonId!: any;
  id!: number;


  constructor( 
    private httpClient :HttpClient,
    public router : Router,
    private deliveryPersonAuthService : DeliveryPersonAuthService
  ) { }

  ngOnInit(): void {
    this.currentDeliveryPersonId = this.getDeliveryPerson(this.id);
    console.log(this.currentDeliveryPersonId);
  }

  getAccessToken() {
    return localStorage.getItem('tokenDP');
  }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: ''+this.deliveryPersonAuthService.getAccessToken()
      }
    );
    return headers;
  }

  // Get Delivery Person
  getDeliveryPerson(id: number) {
    const deliveryPersonId = localStorage.getItem('deliveryPersonId')
    return this.httpClient.get(`${this.API_URL}/getDeliveryPerson/${deliveryPersonId}`, {headers: this.getAuthHeader()}).pipe(catchError(this.errorMgmt));
  }

  // Update DeliveryPerson
  updateDeliveryPerson(id: any, data: any): Observable<any> {
    const deliveryPersonId = localStorage.getItem('deliveryPersonId')
    let url = `${this.API_URL}/updateDeliveryPerson/${deliveryPersonId}`;
    return this.httpClient.patch(url, data, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
  }

  getAllDeliveryPersons(): Observable<any> {
    let url = `${this.API_URL}/`;
    return this.httpClient.get(url, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
  }

  deleteDeliveryPerson(id: string){
    return this.httpClient.delete(`${this.API_URL}/deleteDeliveryPerson/${id}`, {headers: this.getAuthHeader()}).pipe(catchError(this.errorMgmt));
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
