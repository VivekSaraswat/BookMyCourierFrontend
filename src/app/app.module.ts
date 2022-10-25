import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './customer/view-profile/view-profile.component';
import { UpdateProfileComponent } from './customer/update-profile/update-profile.component';
import { BookMyCourierComponent } from './customer/book-my-courier/book-my-courier.component';
import { TrackMyOrderComponent } from './customer/track-my-order/track-my-order.component';
import { MyWalletComponent } from './customer/my-wallet/my-wallet.component';
import { RegisterCustomerComponent } from './customer/register-customer/register-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { CourierService } from './services/courier.service';
import { LoginComponent } from './customer/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { AddMoneyComponent } from './customer/add-money/add-money.component';
import { LoginDeliveryPersonComponent } from './deliveryPerson/login-delivery-person/login-delivery-person.component';
import { RegisterDeliveryPersonComponent } from './deliveryPerson/register-delivery-person/register-delivery-person.component';
import { ViewProfileDeliveryPersonComponent } from './deliveryPerson/view-profile-delivery-person/view-profile-delivery-person.component';
import { UpdateProfileDeliveryPersonComponent } from './deliveryPerson/update-profile-delivery-person/update-profile-delivery-person.component';
import { DeliveryPersonService } from './services/delivery-person.service';
import { DeliveryPersonAuthService } from './services/delivery-person-auth.service';
import { MyWalletDeliveryPersonComponent } from './deliveryPerson/my-wallet-delivery-person/my-wallet-delivery-person.component';
import { UpdateStatusComponent } from './deliveryPerson/update-status/update-status.component';
import { MyCourierComponent } from './deliveryPerson/my-courier/my-courier.component';
import { ViewProfileAdminComponent } from './admin/view-profile-admin/view-profile-admin.component';
import { UpdateProfileAdminComponent } from './admin/update-profile-admin/update-profile-admin.component';
import { ManageCustomersComponent } from './admin/manage-customers/manage-customers.component';
import { ManageCouriersComponent } from './admin/manage-couriers/manage-couriers.component';
import { ManageDeliveryPersonsComponent } from './admin/manage-delivery-persons/manage-delivery-persons.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { AdminAuthService } from './services/admin-auth.service';
import { AdminService } from './services/admin.service';


@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    BookMyCourierComponent,
    TrackMyOrderComponent,
    MyWalletComponent,
    RegisterCustomerComponent,
    LoginComponent,
    HomeComponent,
    AddMoneyComponent,
    LoginDeliveryPersonComponent,
    RegisterDeliveryPersonComponent,
    ViewProfileDeliveryPersonComponent,
    UpdateProfileDeliveryPersonComponent,
    MyWalletDeliveryPersonComponent,
    UpdateStatusComponent,
    MyCourierComponent,
    ViewProfileAdminComponent,
    UpdateProfileAdminComponent,
    ManageCustomersComponent,
    ManageCouriersComponent,
    ManageDeliveryPersonsComponent,
    LoginAdminComponent,
    RegisterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService,CourierService,AuthService,DeliveryPersonService,DeliveryPersonAuthService,AdminAuthService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
