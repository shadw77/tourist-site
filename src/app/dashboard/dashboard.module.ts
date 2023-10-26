import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {path:'dashboard',redirectTo:'dashboard/admin',pathMatch:'full'},
  {path:'admin',component:AdminComponent},
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
