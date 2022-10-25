import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/deliveryPerson';
import { DeliveryPersonAuthService } from 'src/app/services/delivery-person-auth.service';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-update-profile-delivery-person',
  templateUrl: './update-profile-delivery-person.component.html',
  styleUrls: ['./update-profile-delivery-person.component.css']
})
export class UpdateProfileDeliveryPersonComponent implements OnInit {

  formSubmitted = false;
  updatedeliverypersonform!: FormGroup;
  deliveryPersonData: DeliveryPerson[] = [];
  deliveryPersonName!: FormControl;
  deliveryPersonUsername! : FormControl;
  deliveryPersonMobileNo!: FormControl;

  constructor(private deliveryPersonService : DeliveryPersonService,
    private acRoute: ActivatedRoute,
    private router : Router,
    private deliveryPersonAuthService : DeliveryPersonAuthService) { }

  ngOnInit(): void {
    this.deliveryPersonName = new FormControl('', Validators.required);
    this.deliveryPersonUsername = new FormControl('',[Validators.required , Validators.minLength(5)]);
    this.deliveryPersonMobileNo = new FormControl('',[ Validators.required , Validators.pattern('[6-9][0-9]{9}')]);

    this.updatedeliverypersonform = new FormGroup({
      'deliveryPersonName': this.deliveryPersonName,
      'deliveryPersonUsername': this.deliveryPersonUsername,
      'deliveryPersonMobileNo': this.deliveryPersonMobileNo
    });

    let id = this.acRoute.snapshot.paramMap.get('_id');
    this.getDeliveryPerson(id);
  }

  getDeliveryPerson(id: any){
    this.deliveryPersonService.getDeliveryPerson(id).subscribe((data : any) =>{
      this.updatedeliverypersonform.setValue({
        deliveryPersonName : data['deliveryPersonName'],
        deliveryPersonUsername : data['deliveryPersonUsername'],
        deliveryPersonMobileNo : data['deliveryPersonMobileNo']
      });
    });
  }

  updateDeliveryPerson(){
    this.formSubmitted = true;
      let dpid = this.acRoute.snapshot.paramMap.get('_id');
      this.deliveryPersonService.updateDeliveryPerson(dpid,this.updatedeliverypersonform.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/view-profile-delivery-person');
          console.log('Delivery pPerson updated successfully')
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
