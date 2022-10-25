import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Courier } from 'src/app/models/courier';
import { CourierService } from 'src/app/services/courier.service';
import { DeliveryPersonAuthService } from 'src/app/services/delivery-person-auth.service';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  formSubmitted = false;
  updatecourierform! : FormGroup;
  status! : FormControl;
  id! : any;
  DeliveryPerson : any;
  Courier : any;

  constructor(
    private deliveryPersonService : DeliveryPersonService,
    private acRoute: ActivatedRoute,
    private router : Router,
    private deliveryPersonAuthService : DeliveryPersonAuthService,
    private courierService : CourierService
  ) {
    this.id=localStorage.getItem('deliveryPersonId')
      console.log(this.id);
   }

  ngOnInit(): void {
    this.status = new FormControl('',Validators.required);

    this.updatecourierform = new FormGroup({
      'status' : this.status,
    });

    this.deliveryPersonService.getDeliveryPerson(this.id).subscribe((data1) => {
      this.DeliveryPerson=data1;
      this.getCourier1(this.DeliveryPerson.deliveryPersonPickupLocation);
    })
  }

  getCourier1(location : any){
    this.courierService.getCourierByPickupLocation(location).subscribe((data) => {
      this.Courier = data;
      console.log(data);
      localStorage.setItem('courierId',data._id);
      this.getCourier2(data._id);
    })

  }

  getCourier2(id: any){
    this.courierService.getCourierById(id).subscribe((data : any) =>{
      this.updatecourierform.setValue({
        status : data['status'],
      });
    });
  }

  updateCourier(){
    this.formSubmitted = true;
      let courid = localStorage.getItem('courierId');
      this.courierService.updateCourier(courid,this.updatecourierform.value).subscribe({
        complete :()=>{
          localStorage.removeItem('courierId');
          this.router.navigateByUrl('/view-profile-delivery-person');
          console.log('Courier updated successfully')
        },
        error : (e) =>{
          console.log(e)
        }
      });
    
}

  logout(){
    this.deliveryPersonAuthService.logout();
  }

}
