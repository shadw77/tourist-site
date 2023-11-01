
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormGroup, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./shared/shared.module";
import { MainSearchComponent } from './main-search/main-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopDestinationComponent } from './top-destination/top-destination.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { DescCardComponent } from './desc-card/desc-card.component';
import { ItemComponent } from './item/item.component';
import { DisplayRestaurantComponent } from './display-restaurant/display-restaurant.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { AboutUsComponent } from './about-us/about-us.component';
import{ ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ModuleCartModule} from 'src/app/module-cart/module-cart.module';
import { DashboardModule } from "./dashboard/dashboard.module";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DatabaseModule } from "./database/database.module";
import { RouterModule } from '@angular/router';
import { CuttextPipe } from './Pipes/cuttext.pipe';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UsersComponent } from './database/users/users.component';
import { TripsComponent } from './database/trips/trips.component';
import { TripDetailsComponent } from './database/trip-details/trip-details.component';
import { AddTripComponent } from './database/add-trip/add-trip.component';
import { RestaurantsComponent } from './database/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './database/restaurant-details/restaurant-details.component';
import { AddRestaurantComponent } from './database/add-restaurant/add-restaurant.component';
import { DestinationsComponent } from './database/destinations/destinations.component';
import { DestinationDetailsComponent } from './database/destination-details/destination-details.component';
import { AddDestinationComponent } from './database/add-destination/add-destination.component';
import { HotelsComponent } from './database/hotels/hotels.component';
import { HotelDetailsComponent } from './database/hotel-details/hotel-details.component';
import { AddHotelComponent } from './database/add-hotel/add-hotel.component';
import { UserDetailsComponent } from './database/user-details/user-details.component';
import { AddUserComponent } from './database/add-user/add-user.component';
import { VendorComponent } from './dashboard/vendor/vendor.component';

import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, MainSearchComponent, TopDestinationComponent, ImgCardComponent, HomeComponent, ExploreComponent, DescCardComponent, ItemComponent, DisplayRestaurantComponent, DisplayHotelsComponent  ,  AboutUsComponent,
    ContactUsComponent,TripsComponent,TripDetailsComponent,AddTripComponent,RestaurantsComponent,RestaurantDetailsComponent,AddRestaurantComponent,DestinationsComponent,DestinationDetailsComponent,
    HomeLayoutComponent,AddDestinationComponent,HotelsComponent,HotelDetailsComponent,AddHotelComponent,UserDetailsComponent,AddUserComponent,VendorComponent,
    DashboardLayoutComponent,AdminComponent,UsersComponent,CuttextPipe,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ModuleCartModule,
    RouterModule,
    DatabaseModule,
    DashboardModule,
    NgxSpinnerModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
