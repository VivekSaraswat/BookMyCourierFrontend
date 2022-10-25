import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CourierService } from 'src/app/services/courier.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-track-my-order',
  templateUrl: './track-my-order.component.html',
  styleUrls: ['./track-my-order.component.css']
})
export class TrackMyOrderComponent implements OnInit {
  Customer: any;
  id! : any;
  Courier : any;


  constructor(
    private customerService : CustomerService,
    private route: ActivatedRoute,
    private router : Router,
    private authService : AuthService,
    private courierService : CourierService
  ) { 
    this.id = localStorage.getItem('customerId');
  }

  ngOnInit(): void {
    this.courierService.getCourierByCustomerId(this.id).subscribe((data: any) => {
      this.Courier = data;
      console.log(data);
  })
}

  logout(){
    this.authService.logout();
  }

}
