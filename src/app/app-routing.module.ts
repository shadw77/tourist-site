import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { DisplayRestaurantComponent } from './display-restaurant/display-restaurant.component';

const routes: Routes = [
  {
  path:'',
  component:HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'hotels',
    component:DisplayHotelsComponent,
  },
  {
    path:'restaurents',
    component:DisplayRestaurantComponent,
  },
   {
    path:'discover',loadChildren: () => import('src/app/discovermodule/discovermodule.module')
    .then(m=>m.DiscovermoduleModule)
  },
  
  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
