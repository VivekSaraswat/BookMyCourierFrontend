import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryPerson } from 'src/app/models/deliveryPerson';
import { DeliveryPersonAuthService } from 'src/app/services/delivery-person-auth.service';
import { DeliveryPersonService } from 'src/app/services/delivery-person.service';

@Component({
  selector: 'app-login-delivery-person',
  templateUrl: './login-delivery-person.component.html',
  styleUrls: ['./login-delivery-person.component.css']
})
export class LoginDeliveryPersonComponent implements OnInit {

  formSubmitted = false;
  logindeliverypersonform!: FormGroup;
  deliveryPersonData: DeliveryPerson[] = [];
  deliveryPersonUsername!: FormControl;
  deliveryPersonPassword!: FormControl;

  constructor(
    private acRoute: ActivatedRoute,
    private deliveryPersonService: DeliveryPersonService,
    private deliveryPersonAuthService : DeliveryPersonAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.deliveryPersonUsername = new FormControl('', Validators.required);
    this.deliveryPersonPassword = new FormControl('', Validators.required);

    this.logindeliverypersonform = new FormGroup({
      'deliveryPersonUsername': this.deliveryPersonUsername,
      'deliveryPersonPassword': this.deliveryPersonPassword
    });
  }

  loginDeliveryPerson(){
    this.formSubmitted=true;
    this.deliveryPersonAuthService.login(this.logindeliverypersonform.value)
  }

}
