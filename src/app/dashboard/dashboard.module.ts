import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatabaseModule } from '../database/database.module';
import { UsersComponent } from '../database/users/users.component';
import { TripsComponent } from '../database/trips/trips.component';


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
      }
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
