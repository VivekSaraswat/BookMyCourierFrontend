import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSubmitted = false;
  logincustomerform!: FormGroup;
  customerData: Customer[] = [];
  username!: FormControl;
  password!: FormControl;

  constructor(
    private acRoute: ActivatedRoute,
    private customerService: CustomerService,
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.logincustomerform = new FormGroup({
      'username': this.username,
      'password': this.password
    });
  
  }

  loginUser(){
    this.formSubmitted=true;
    this.authService.login(this.logincustomerform.value)
  }

}
