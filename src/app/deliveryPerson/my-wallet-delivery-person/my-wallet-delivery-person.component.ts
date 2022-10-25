import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryPersonAuthService } from 'src/app/services/delivery-person-auth.service';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-my-wallet-delivery-person',
  templateUrl: './my-wallet-delivery-person.component.html',
  styleUrls: ['./my-wallet-delivery-person.component.css']
})
export class MyWalletDeliveryPersonComponent implements OnInit {

  constructor(private deliveryPersonService : DeliveryPersonService,
    private route: ActivatedRoute,
    private router : Router,
    private deliveryPersonAuthService : DeliveryPersonAuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.deliveryPersonAuthService.logout();
  }

}
