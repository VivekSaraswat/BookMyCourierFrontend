import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { CourierService } from 'src/app/services/courier.service';

@Component({
  selector: 'app-manage-couriers',
  templateUrl: './manage-couriers.component.html',
  styleUrls: ['./manage-couriers.component.css']
})
export class ManageCouriersComponent implements OnInit {

  couriers : any =[];

  constructor(
    private adminService : AdminService,
    private route: ActivatedRoute,
    private router : Router,
    private adminAuthService : AdminAuthService,
    private courierService : CourierService
  ) { 
    this.getAllCouriers();

  }

  ngOnInit(): void {
  }

  getAllCouriers(){
    this.courierService.getCouriers().subscribe((courdata) =>{
      this.couriers = courdata;
    })
  }

  removeCouriers(courier: any,index: any){
    if(window.confirm('Are you sure???')){
      this.courierService.deleteCourier(courier._id).subscribe((data) =>{
        this.couriers.splice(index,1);
      })
    }
  }

  logout(){
    this.adminAuthService.logout();
  }

}
