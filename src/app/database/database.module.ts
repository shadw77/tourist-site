import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {  RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TripDetailsComponent } from './trip-details/trip-details.component';

@NgModule({
  declarations: [
    // UsersComponent
  
    TripsComponent,
    AddTripComponent,
    TripDetailsComponent
  ],
  imports: [
    CommonModule    ,
    RouterModule,
    ReactiveFormsModule
  ],
  exports : [
    // UsersComponent,
    RouterModule
  ]
})
export class DatabaseModule { }