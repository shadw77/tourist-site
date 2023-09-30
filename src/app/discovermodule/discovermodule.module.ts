import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { CaraouselComponent } from './caraousel/caraousel.component';

const routes: Routes = [
  
  {path:'',redirectTo:'/discover/home',pathMatch:'full'},
  {path:'home',component:DiscoverComponent},
];

@NgModule({
  declarations: [  
    DiscoverComponent, CaraouselComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes)

  ]
})
export class DiscovermoduleModule { }
