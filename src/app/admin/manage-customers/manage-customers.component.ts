import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers : any =[];

  constructor(
    private adminService : AdminService,
    private route: ActivatedRoute,
    private router : Router,
    private adminAuthService : AdminAuthService,
    private customerService : CustomerService
  ) { 
    this.getAllCustomers();

  }

  ngOnInit(): void {
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe((custdata) =>{
      this.customers = custdata;
    })
  }

  removeCustomers(customer: any,index: any){
    if(window.confirm('Are you sure???')){
      this.customerService.deleteCustomer(customer._id).subscribe((data) =>{
        this.customers.splice(index,1);
      })
    }
  }

  logout(){
    this.adminAuthService.logout();
  }

}
