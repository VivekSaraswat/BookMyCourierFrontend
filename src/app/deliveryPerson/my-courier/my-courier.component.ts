import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourierService } from 'src/app/services/courier.service';
import { DeliveryPersonAuthService } from 'src/app/services/delivery-person-auth.service';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-my-courier',
  templateUrl: './my-courier.component.html',
  styleUrls: ['./my-courier.component.css']
})
export class MyCourierComponent implements OnInit {

  public title = 'Customer Detail';
  DeliveryPerson : any;
  DeliveryPersonPickUpLocation : any;
  Courier : any;
  id! : any;

  constructor(private deliveryPersonService : DeliveryPersonService,
    private courierService : CourierService,
    private route: ActivatedRoute,
    private router : Router,
    private deliveryPersonAuthService : DeliveryPersonAuthService) {
      this.id=localStorage.getItem('deliveryPersonId')
      console.log(this.id);
     }

  ngOnInit(): void {
    this.deliveryPersonService.getDeliveryPerson(this.id).subscribe((data1) => {
      this.DeliveryPerson=data1;
      this.DeliveryPersonPickUpLocation = this.DeliveryPerson.deliveryPersonPickupLocation;
      this.getCourier(this.DeliveryPerson.deliveryPersonPickupLocation);
    })
  
    
  }

  getCourier(location : any){
    this.courierService.getCourierByPickupLocation(this.DeliveryPersonPickUpLocation).subscribe((data) => {
      this.Courier = data;
      console.log(data);
    })

  }

  logout(){
    this.deliveryPersonAuthService.logout();
  }

}
