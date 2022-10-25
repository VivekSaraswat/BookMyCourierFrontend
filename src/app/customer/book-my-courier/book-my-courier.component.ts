import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Courier } from 'src/app/models/courier';
import { AuthService } from 'src/app/services/auth.service';
import { CourierService } from 'src/app/services/courier.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-book-my-courier',
  templateUrl: './book-my-courier.component.html',
  styleUrls: ['./book-my-courier.component.css']
})
export class BookMyCourierComponent implements OnInit {

  formSubmitted = false;
  bookmycourierform! : FormGroup;
  courierData : Courier[] =[];
  pickupLocation! : FormControl;
  pickupAddress! : FormControl;
  endLocation! : FormControl;
  endAddress! : FormControl;
  courierType! : FormControl;
  courierContent! : FormControl;
  customerId! : FormControl;
  id! : any;


  constructor(
    private acRoute: ActivatedRoute,
    private courierService : CourierService,
    private customerService : CustomerService,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.pickupLocation = new FormControl('',Validators.required);
    this.pickupAddress = new FormControl('',Validators.required);
    this.endLocation = new FormControl('',Validators.required);
    this.endAddress = new FormControl('',Validators.required);
    this.courierType = new FormControl('',Validators.required);
    this.courierContent = new FormControl('',Validators.required);
    this.customerId = new FormControl('',Validators.required);

    this.bookmycourierform = new FormGroup({
      'customerId' : this.customerId,
      'pickupLocation' : this.pickupLocation,
      'pickupAddress' : this.pickupAddress,
      'endLocation' : this.endLocation,
      'endAddress' : this.endAddress,
      'courierType' : this.courierType,
      'courierContent' : this.courierContent,
    });

    let id = localStorage.getItem('customerId');
    console.log(id);
    this.getCustomer(this.id);
  }

  getCustomer(id: any){
    this.customerService.getCustomer(id).subscribe((data : any) =>{
      console.log(data['_id']);
      this.bookmycourierform.setValue({
        customerId : data['_id'],
        pickupLocation : data['pickupLocation'],
        pickupAddress : '',
        endLocation : '',
        endAddress : '',
        courierType : '',
        courierContent : ''
      });
    });
  }

  logout(){
    this.authService.logout();
  }

  onSubmit(){
    this.formSubmitted=true;
    if(window.confirm("Are you sure???")){
      //let courierId = this.acRoute.snapshot.paramMap.get('_id');
      this.courierService.addCourier(this.bookmycourierform.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/view-profile');
        },
        error : (e :any) =>{
          console.log(e)
        }
      });
    }
  }

}