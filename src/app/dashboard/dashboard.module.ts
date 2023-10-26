import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {path:'',redirectTo:'/admin/dashboard',pathMatch:'full'},
  {path:'dashboard',component:AdminComponent},
];

@NgModule({
  declarations: [
    AdminComponent,
    VendorComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports : [
    AdminComponent,
    VendorComponent,
    RouterModule,
    
  ]
})
export class DashboardModule { }
