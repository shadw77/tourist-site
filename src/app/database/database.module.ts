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
import { HotelsComponent } from './hotels/hotels.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { AddUserOrderComponent } from './add-user-order/add-user-order.component';
import { UserOrderDetailsComponent } from './user-order-details/user-order-details.component';

import { ShowTripComponent } from './show-trip/show-trip.component';
import { ShowRestaurantComponent } from './show-restaurant/show-restaurant.component';

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
    AddDestinationComponent,
    HotelsComponent,
    AddHotelComponent,
    HotelDetailsComponent,
    UserDetailsComponent,
    AddUserComponent,
    UserOrdersComponent,
    AddUserOrderComponent,
    UserOrderDetailsComponent,
    ShowTripComponent,
    ShowRestaurantComponent,


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
