import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  formSubmitted = false;
  registercustomerform!: FormGroup;
  customerData: Customer[] = [];
  customerName!: FormControl;
  username! : FormControl;
  customerMobileNo!: FormControl;
  pickupLocation!: FormControl;
  password!: FormControl;

  constructor(
    private acRoute: ActivatedRoute,
    private customerService: CustomerService,
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customerName = new FormControl('', Validators.required);
    this.username = new FormControl('',[Validators.required , Validators.minLength(5)]);
    this.customerMobileNo = new FormControl('', [ Validators.required , Validators.pattern('[6-9][0-9]{9}')]);
    this.pickupLocation = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required , Validators.minLength(8)]);

    this.registercustomerform = new FormGroup({
      'customerName': this.customerName,
      'username': this.username,
      'customerMobileNo': this.customerMobileNo,
      'pickupLocation': this.pickupLocation,
      'password': this.password
    });
  
  }

  registerCustomer(){
    this.formSubmitted=true;
    this.authService.register(this.registercustomerform.value).subscribe((res) => {
      if (res.result) {
        this.registercustomerform.reset()
        this.router.navigate(['/login']);
      }
    })
  }

}
