import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  formSubmitted = false;
  registeradminform!: FormGroup;
  adminData: Admin[] = [];
  adminName!: FormControl;
  adminUsername! : FormControl;
  adminEmail!: FormControl;
  adminPassword!: FormControl;

  constructor(
    private acRoute: ActivatedRoute,
    private adminService: AdminService,
    private adminAuthService : AdminAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminName = new FormControl('', Validators.required);
    this.adminUsername = new FormControl('', [Validators.required , Validators.minLength(5)]);
    this.adminEmail = new FormControl('',[ Validators.required , Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z]+[.][com]{3}')]);
    this.adminPassword = new FormControl('', [Validators.required , Validators.minLength(8)]);

    this.registeradminform = new FormGroup({
      'adminName': this.adminName,
      'adminUsername': this.adminUsername,
      'adminEmail': this.adminEmail,
      'adminPassword': this.adminPassword,
    });
  }

  registerAdmin(){
    this.formSubmitted=true;
    this.adminAuthService.register(this.registeradminform.value).subscribe((res) => {
      if (res.result) {
        this.registeradminform.reset()
        this.router.navigate(['/login-admin']);
      }
    })
  }


}
