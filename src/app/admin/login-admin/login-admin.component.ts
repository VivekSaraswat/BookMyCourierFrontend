import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  formSubmitted = false;
  loginadminform!: FormGroup;
  adminData: Admin[] = [];
  adminUsername!: FormControl;
  adminPassword!: FormControl;

  constructor(
    private acRoute: ActivatedRoute,
    private adminService: AdminService,
    private adminAuthService : AdminAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminUsername = new FormControl('', Validators.required);
    this.adminPassword = new FormControl('', Validators.required);

    this.loginadminform = new FormGroup({
      'adminUsername': this.adminUsername,
      'adminPassword': this.adminPassword
    });
  }

  loginAdmin(){
    this.formSubmitted=true;
    this.adminAuthService.login(this.loginadminform.value)
  }

}
