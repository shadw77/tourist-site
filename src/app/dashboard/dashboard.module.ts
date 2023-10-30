import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatabaseModule } from '../database/database.module';
import { UsersComponent } from '../database/users/users.component';
import { TripsComponent } from '../database/trips/trips.component';
import { TripDetailsComponent } from '../database/trip-details/trip-details.component';
import { AddTripComponent } from '../database/add-trip/add-trip.component';
import { UserOrdersComponent } from '../database/user-orders/user-orders.component';
import { AddUserOrderComponent } from '../database/add-user-order/add-user-order.component';


const routes: Routes = [
  

  {
    path: 'dashboard',
    redirectTo: 'dashboard/admin',
    pathMatch: 'full'
  },
  {
    path: 'dashboard/admin',
    component: AdminComponent,
    children: [
      { 
        path: 'users',
        component: UsersComponent,
        outlet: 'details'
      },
      { 
        path: 'trips',
        component: TripsComponent,
        outlet: 'details'
      },
      {
        path: 'add-trip',
        component: AddTripComponent,
        outlet: 'details'
      },
      { 
        path: 'edit-trip/:id',
        component: TripDetailsComponent,
        outlet: 'details'
      
      },
      {

        path: 'user-orders',
        component: UserOrdersComponent,
        outlet: 'details'
      },
      {

        path: 'add-order',
        component: AddUserOrderComponent,
        outlet: 'details'
      },
     
    ]
  },
 
 
];

@NgModule({
  declarations: [
    AdminComponent,
    VendorComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
    // RouterModule.forChild(routes)

  ],
  exports : [
    AdminComponent,
    VendorComponent,
    RouterModule,
    
  ]
})
export class DashboardModule { }
