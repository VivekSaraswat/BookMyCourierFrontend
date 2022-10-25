import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-profile-admin',
  templateUrl: './view-profile-admin.component.html',
  styleUrls: ['./view-profile-admin.component.css']
})
export class ViewProfileAdminComponent implements OnInit {

  public title = 'Customer Detail';
  Admin: any;
  id! : any;

  constructor(
    private adminService : AdminService,
    private route: ActivatedRoute,
    private router : Router,
    private adminAuthService : AdminAuthService
  ) { }

  ngOnInit(): void {
    this.adminService.getAdmin(this.id).subscribe((data) => {
      this.Admin = data;
      console.log(data);
    })
  }

  logout(){
    this.adminAuthService.logout();
  }

}
