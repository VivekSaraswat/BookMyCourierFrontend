import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMyCourierComponent } from './customer/book-my-courier/book-my-courier.component';
import { MyWalletComponent } from './customer/my-wallet/my-wallet.component';
import { RegisterCustomerComponent } from './customer/register-customer/register-customer.component';
import { TrackMyOrderComponent } from './customer/track-my-order/track-my-order.component';
import { UpdateProfileComponent } from './customer/update-profile/update-profile.component';
import { ViewProfileComponent } from './customer/view-profile/view-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './customer/login/login.component';
import { AddMoneyComponent } from './customer/add-money/add-money.component';
import { LoginDeliveryPersonComponent } from './deliveryPerson/login-delivery-person/login-delivery-person.component';
import { RegisterDeliveryPersonComponent } from './deliveryPerson/register-delivery-person/register-delivery-person.component';
import { ViewProfileDeliveryPersonComponent } from './deliveryPerson/view-profile-delivery-person/view-profile-delivery-person.component';
import { MyWalletDeliveryPersonComponent } from './deliveryPerson/my-wallet-delivery-person/my-wallet-delivery-person.component';
import { UpdateStatusComponent } from './deliveryPerson/update-status/update-status.component';
import { UpdateProfileDeliveryPersonComponent } from './deliveryPerson/update-profile-delivery-person/update-profile-delivery-person.component';
import { MyCourierComponent } from './deliveryPerson/my-courier/my-courier.component';
import { ViewProfileAdminComponent } from './admin/view-profile-admin/view-profile-admin.component';
import { UpdateProfileAdminComponent } from './admin/update-profile-admin/update-profile-admin.component';
import { ManageCustomersComponent } from './admin/manage-customers/manage-customers.component';
import { ManageCouriersComponent } from './admin/manage-couriers/manage-couriers.component';
import { ManageDeliveryPersonsComponent } from './admin/manage-delivery-persons/manage-delivery-persons.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';

const routes: Routes = [
  {path:'view-profile',component:ViewProfileComponent},
  {path:'update-profile',component:UpdateProfileComponent},
  {path:'book-my-courier',component:BookMyCourierComponent},
  {path:'track-my-order',component:TrackMyOrderComponent},
  {path:'my-wallet',component:MyWalletComponent},
  {path:'register-customer',component:RegisterCustomerComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'add-money',component:AddMoneyComponent},
  {path:'login-delivery-person',component:LoginDeliveryPersonComponent},
  {path:'register-delivery-person',component:RegisterDeliveryPersonComponent},
  {path:'view-profile-delivery-person',component:ViewProfileDeliveryPersonComponent},
  {path:'my-wallet-delivery-person',component:MyWalletDeliveryPersonComponent},
  {path:'update-status',component:UpdateStatusComponent},
  {path:'update-profile-delivery-person',component:UpdateProfileDeliveryPersonComponent},
  {path:'my-courier',component:MyCourierComponent},
  {path:'register-admin',component:RegisterAdminComponent},
  {path:'login-admin',component:LoginAdminComponent},
  {path:'view-profile-admin',component:ViewProfileAdminComponent},
  {path:'update-profile-admin',component:UpdateProfileAdminComponent},
  {path:'manage-customers',component:ManageCustomersComponent},
  {path:'manage-couriers',component:ManageCouriersComponent},
  {path:'manage-delivery-persons',component:ManageDeliveryPersonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
