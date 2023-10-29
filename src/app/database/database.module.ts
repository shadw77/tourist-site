import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {  RouterModule, Routes,RouterLink } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    TripsComponent,
    AddTripComponent,
    TripDetailsComponent,
    RestaurantsComponent,
    AddRestaurantComponent,
    RestaurantDetailsComponent,
    DestinationDetailsComponent,
    DestinationsComponent,
    AddDestinationComponent
    UserDetailsComponent,
    AddUserComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports : [
    // UsersComponent,
    RouterModule
  ]
})
export class DatabaseModule { }
