import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-manage-delivery-persons',
  templateUrl: './manage-delivery-persons.component.html',
  styleUrls: ['./manage-delivery-persons.component.css']
})
export class ManageDeliveryPersonsComponent implements OnInit {

  deliveryPersons : any =[];

  constructor(
    private adminService : AdminService,
    private route: ActivatedRoute,
    private router : Router,
    private adminAuthService : AdminAuthService,
    private deliveryPersonService : DeliveryPersonService
  ) { 
    this.getAllDeliveryPersons();

  }

  ngOnInit(): void {
  }

  getAllDeliveryPersons(){
    this.deliveryPersonService.getAllDeliveryPersons().subscribe((delPerdata) =>{
      this.deliveryPersons = delPerdata;
    })
  }

  removeDeliveryPersons(deliveryPerson: any,index: any){
    if(window.confirm('Are you sure???')){
      this.deliveryPersonService.deleteDeliveryPerson(deliveryPerson._id).subscribe((data) =>{
        this.deliveryPersons.splice(index,1);
      })
    }
  }

  logout(){
    this.adminAuthService.logout();
  }

}
