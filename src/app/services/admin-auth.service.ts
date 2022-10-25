import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  API_URL : string ='http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentAdmin = {};
  admin = Admin;
  http : any;

  constructor(private httpClient : HttpClient,public router : Router) { }

  register(admin : Admin): Observable<any>{
    this.router.navigateByUrl('/login-admin');
    return this.httpClient.post(`${this.API_URL}/admin/auth/register/`,admin).pipe(
      catchError(this.errorMgmt)
    )
  }

  login(admin : Admin) {
    return this.httpClient.post<any>(`${this.API_URL}/admin/auth/login/`, admin)
      .subscribe((res: any) => {
        localStorage.setItem('tokenAdmin', res.accessToken)
        localStorage.setItem('adminId', res._id)
        this.router.navigateByUrl('/view-profile-admin');
        console.log("login working")
        return res.admin;
      })
  }

  getAccessToken() {
    return localStorage.getItem('tokenAdmin');
  }

  logout() {
    if (localStorage.removeItem('tokenAdmin') == null && localStorage.removeItem('adminId') == null) {
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
