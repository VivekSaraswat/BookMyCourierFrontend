import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/deliveryPerson';
import { DeliveryPersonAuthService } from 'src/app/services/delivery-person-auth.service';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-register-delivery-person',
  templateUrl: './register-delivery-person.component.html',
  styleUrls: ['./register-delivery-person.component.css']
})
export class RegisterDeliveryPersonComponent implements OnInit {

  formSubmitted = false;
  registerdeliverypersonform!: FormGroup;
  deliveryPersonData: DeliveryPerson[] = [];
  deliveryPersonName!: FormControl;
  deliveryPersonUsername! : FormControl;
  deliveryPersonMobileNo!: FormControl;
  deliveryPersonPassword!: FormControl;
  deliveryPersonPickupLocation!: FormControl;

  constructor(
    private acRoute: ActivatedRoute,
    private deliveryPersonService: DeliveryPersonService,
    private deliveryPersonAuthService : DeliveryPersonAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.deliveryPersonName = new FormControl('', Validators.required);
    this.deliveryPersonUsername = new FormControl('', [Validators.required , Validators.minLength(5)]);
    this.deliveryPersonMobileNo = new FormControl('', [ Validators.required , Validators.pattern('[6-9][0-9]{9}')]);
    this.deliveryPersonPassword = new FormControl('', [Validators.required , Validators.minLength(8)]);
    this.deliveryPersonPickupLocation = new FormControl('', Validators.required);

    this.registerdeliverypersonform = new FormGroup({
      'deliveryPersonName': this.deliveryPersonName,
      'deliveryPersonUsername': this.deliveryPersonUsername,
      'deliveryPersonMobileNo': this.deliveryPersonMobileNo,
      'deliveryPersonPassword': this.deliveryPersonPassword,
      'deliveryPersonPickupLocation' : this.deliveryPersonPickupLocation
    });
  }

  registerDeliveryPerson(){
    this.formSubmitted=true;
    this.deliveryPersonAuthService.register(this.registerdeliverypersonform.value).subscribe((res) => {
      if (res.result) {
        this.registerdeliverypersonform.reset()
        this.router.navigate(['/login-delivery-person']);
      }
    })
  }

}
