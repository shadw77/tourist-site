import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/module-cart/cart/cart.component';
import { ListCardsComponent } from 'src/app/module-cart/list-cards/list-cards.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { DisplayRestaurantComponent } from './display-restaurant/display-restaurant.component';
import { CartItemService } from './Services/cart-item.service';
import { ModuleCartModule } from './module-cart/module-cart.module';

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
    path:'restaurents',
    component:DisplayRestaurantComponent,
  },
  {
    path:'cart',
    component:CartComponent,
  },
   {
    path:'discover',loadChildren: () => import('src/app/discovermodule/discovermodule.module')
    .then(m=>m.DiscovermoduleModule)
  },

  {
    path:'about', 
    component:AboutUsComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'admin',loadChildren: () => import('src/app/dashboard/dashboard.module')
    .then(m=>m.DashboardModule)
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
