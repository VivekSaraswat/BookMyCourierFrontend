import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  formSubmitted = false;
  updatecustomerform!: FormGroup;
  customerData: Customer[] = [];
  customerName!: FormControl;
  username! : FormControl;
  customerMobileNo!: FormControl;
  pickupLocation!: FormControl;

  constructor(
    private acRoute: ActivatedRoute,
    private customerService: CustomerService,
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customerName = new FormControl('', Validators.required);
    this.username = new FormControl('', [Validators.required , Validators.minLength(5)]);
    this.customerMobileNo = new FormControl('',[ Validators.required , Validators.pattern('[6-9][0-9]{9}')]);
    this.pickupLocation = new FormControl('', Validators.required);

    this.updatecustomerform = new FormGroup({
      'customerName': this.customerName,
      'username': this.username,
      'customerMobileNo': this.customerMobileNo,
      'pickupLocation': this.pickupLocation
    });

    let id = this.acRoute.snapshot.paramMap.get('_id');
    this.getCustomer(id);
  }

  getCustomer(id: any){
    this.customerService.getCustomer(id).subscribe((data : any) =>{
      this.updatecustomerform.setValue({
        customerName : data['customerName'],
        username : data['username'],
        customerMobileNo : data['customerMobileNo'],
        pickupLocation : data['pickupLocation']
      });
    });
  }

  updateCustomer(){
      this.formSubmitted = true;
        let custid = this.acRoute.snapshot.paramMap.get('_id');
        this.customerService.updateCustomer(custid,this.updatecustomerform.value).subscribe({
          complete :()=>{
            this.router.navigateByUrl('/view-profile');
            console.log('Customer updated successfully')
          },
          error : (e) =>{
            console.log(e)
          }
        });
      
  }

  logout(){
    this.authService.logout();
  }

}
