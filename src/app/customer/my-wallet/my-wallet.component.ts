import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {
  public title = 'Customer Detail';
  Customer: any;
  id! : any;

  constructor(private customerService : CustomerService,
    private route: ActivatedRoute,
    private router : Router,
    private authService : AuthService) { }

  ngOnInit(): void {
    this.customerService.getCustomer(this.id).subscribe((data) => {
      this.Customer = data;
      console.log(data);
    })
  }

  logout(){
    this.authService.logout();
  }

  addMoney(){
    this.router.navigateByUrl('/add-money');
  }

}
