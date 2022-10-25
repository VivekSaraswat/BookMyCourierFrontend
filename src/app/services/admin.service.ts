import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, catchError, Observable, throwError } from 'rxjs';
import { Admin } from '../models/admin';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isUserLogged = new Subject<boolean>();
  API_URL = 'http://localhost:4000/admin';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  admins: Admin[] = [];
  currentAdminId!: any;
  id!: number;


  constructor( 
    private httpClient :HttpClient,
    public router : Router,
    private adminAuthService : AdminAuthService
  ) { }

  ngOnInit(): void {
    this.currentAdminId = this.getAdmin(this.id);
    console.log(this.currentAdminId);
  }

  getAccessToken() {
    return localStorage.getItem('tokenAdmin');
  }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: ''+this.adminAuthService.getAccessToken()
      }
    );
    return headers;
  }

  // Get Admin
  getAdmin(id: number) {
    const adminId = localStorage.getItem('adminId')
    return this.httpClient.get(`${this.API_URL}/getAdmin/${adminId}`, {headers: this.getAuthHeader()}).pipe(catchError(this.errorMgmt));
  }

  // Update Admin
  updateAdmin(id: any, data: any): Observable<any> {
    const adminId = localStorage.getItem('adminId')
    let url = `${this.API_URL}/updateAdmin/${adminId}`;
    return this.httpClient.patch(url, data, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
  }

  getAllAdmins(): Observable<any> {
    let url = `${this.API_URL}/`;
    return this.httpClient.get(url, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
  }

  deleteAdmin(id: string){
    return this.httpClient.delete(`${this.API_URL}/deleteAdmin/${id}`, {headers: this.getAuthHeader()}).pipe(catchError(this.errorMgmt));
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
