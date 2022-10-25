import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';
import { DeliveryPersonAuthService } from 'src/app/services/delivery-person-auth.service';

@Component({
  selector: 'app-view-profile-delivery-person',
  templateUrl: './view-profile-delivery-person.component.html',
  styleUrls: ['./view-profile-delivery-person.component.css']
})
export class ViewProfileDeliveryPersonComponent implements OnInit {

  public title = 'Customer Detail';
  DeliveryPerson: any;
  id! : any;

  constructor(
    private deliveryPersonService : DeliveryPersonService,
    private route: ActivatedRoute,
    private router : Router,
    private deliveryPersonAuthService : DeliveryPersonAuthService
  ) { }

  ngOnInit(): void {
    this.deliveryPersonService.getDeliveryPerson(this.id).subscribe((data) => {
      this.DeliveryPerson = data;
      console.log(data);
    })
  }

  logout(){
    this.deliveryPersonAuthService.logout();
  }

}
