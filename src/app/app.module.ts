import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {  FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ModuleCartModule} from 'src/app/module-cart/module-cart.module';
import { DashboardModule } from "./dashboard/dashboard.module";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DatabaseModule } from "./database/database.module";
import { RouterModule } from '@angular/router';
import { DisplayTripsComponent } from './display-trips/display-trips.component';
import { DisplayDestinationsComponent } from './display-destinations/display-destinations.component';
import { CuttextPipe } from './Pipes/cuttext.pipe';

import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import { DisplayServicesComponent } from './display-services/display-services.component';
import { SignComponent } from './Sign/sign.component';
import { SignupComponent } from './signup/signup.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { DisplayOrdersComponent } from './display-orders/display-orders.component';
import { EditUserOrderComponent } from './edit-user-order/edit-user-order.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [AppComponent, MainSearchComponent, TopDestinationComponent, ImgCardComponent, HomeComponent, ExploreComponent, DescCardComponent, ItemComponent, DisplayRestaurantComponent, DisplayHotelsComponent  ,  AboutUsComponent,
    ContactUsComponent,
    HomeLayoutComponent,
    DashboardLayoutComponent,
    DisplayTripsComponent,
    DisplayDestinationsComponent,
    DisplayServicesComponent,SignComponent,SignupComponent,RequestResetComponent,ResponseResetComponent,DisplayOrdersComponent, EditUserOrderComponent, EditProfileComponent, BackgroundComponent

    ],
  imports: [
    CommonModule,
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