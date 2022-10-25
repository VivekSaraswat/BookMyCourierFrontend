import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  
  formSubmitted = false;
  addmoneyform! : FormGroup;
  customerWalletAmount! : FormControl;
  id! : any;
  Customer : any;


  constructor(private authService : AuthService,
    private customerService : CustomerService,
    private route: ActivatedRoute,
    private router : Router) {
      this.id=localStorage.getItem('customerId')
      console.log(this.id);
     }

  ngOnInit(): void {

    this.customerWalletAmount = new FormControl('',Validators.required);

    this.addmoneyform = new FormGroup({
      'customerWalletAmount' : this.customerWalletAmount,
    });
  }

  logout(){
    this.authService.logout();
  }

  addMoney(){
    this.formSubmitted = true;
      let custid = localStorage.getItem('customerId');
      this.customerService.updateCustomer(custid,this.addmoneyform.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/my-wallet');
          console.log('Amount added successfully')
        },
        error : (e) =>{
          console.log(e)
        }
      });
    
  }

}
