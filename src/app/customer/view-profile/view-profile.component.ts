import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  public title = 'Customer Detail';
  Customer: any;
  id! : any;

  constructor(
    private customerService : CustomerService,
    private route: ActivatedRoute,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    //this.Customer = new this.Customer();
    this.customerService.getCustomer(this.id).subscribe((data) => {
      this.Customer = data;
      console.log(data);
    })
  }

  logout(){
    this.authService.logout();
  }

}
