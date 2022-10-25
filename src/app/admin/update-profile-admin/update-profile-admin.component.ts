import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-profile-admin',
  templateUrl: './update-profile-admin.component.html',
  styleUrls: ['./update-profile-admin.component.css']
})
export class UpdateProfileAdminComponent implements OnInit {

  formSubmitted = false;
  updateadminform!: FormGroup;
  adminData: Admin[] = [];
  adminName!: FormControl;
  adminUsername! : FormControl;
  adminEmail!: FormControl;

  constructor(
    private adminService : AdminService,
    private acRoute: ActivatedRoute,
    private router : Router,
    private adminAuthService : AdminAuthService
  ) { }

  ngOnInit(): void {
    this.adminName = new FormControl('', Validators.required);
    this.adminUsername = new FormControl('',[Validators.required , Validators.minLength(5)]);
    this.adminEmail = new FormControl('',[ Validators.required , Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z]+[.][com]{3}')]);

    this.updateadminform = new FormGroup({
      'adminName': this.adminName,
      'adminUsername': this.adminUsername,
      'adminEmail': this.adminEmail
    });

    let id = this.acRoute.snapshot.paramMap.get('_id');
    this.getAdmin(id);
  }

  getAdmin(id: any){
    this.adminService.getAdmin(id).subscribe((data : any) =>{
      this.updateadminform.setValue({
        adminName : data['adminName'],
        adminUsername : data['adminUsername'],
        adminEmail : data['adminEmail']
      });
    });
  }

  updateAdmin(){
    this.formSubmitted = true;
      let dpid = this.acRoute.snapshot.paramMap.get('_id');
      this.adminService.updateAdmin(dpid,this.updateadminform.value).subscribe({
        complete :()=>{
          this.router.navigateByUrl('/view-profile-admin');
          console.log('Delivery pPerson updated successfully')
        },
        error : (e) =>{
          console.log(e)
        }
      });
    
}

  logout(){
    this.adminAuthService.logout();
  }

}
