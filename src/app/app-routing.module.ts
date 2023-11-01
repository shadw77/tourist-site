import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/module-cart/cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { DisplayRestaurantComponent } from './display-restaurant/display-restaurant.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UsersComponent } from './database/users/users.component';
import { TripsComponent } from './database/trips/trips.component';
import { TripDetailsComponent } from './database/trip-details/trip-details.component';
import { AddTripComponent } from './database/add-trip/add-trip.component';
import { RestaurantsComponent } from './database/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './database/restaurant-details/restaurant-details.component';
import { AddRestaurantComponent } from './database/add-restaurant/add-restaurant.component';
import { DestinationsComponent } from './database/destinations/destinations.component';
import { DestinationDetailsComponent } from './database/destination-details/destination-details.component';
import { AddDestinationComponent } from './database/add-destination/add-destination.component';
import { HotelsComponent } from './database/hotels/hotels.component';
import { HotelDetailsComponent } from './database/hotel-details/hotel-details.component';
import { AddHotelComponent } from './database/add-hotel/add-hotel.component';
import { UserDetailsComponent } from './database/user-details/user-details.component';
import { AddUserComponent } from './database/add-user/add-user.component';
import { VendorComponent } from './dashboard/vendor/vendor.component';

const routes: Routes = [
  // {
  // path:'',
  // component:HomeComponent,
  // },
  // {
  //   path:'home',
  //   component:HomeComponent,
  // },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
    { 
      path: '', 
    component: HomeComponent 
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
    }
  ]
  
},{

  
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
      path: 'add-user',
      component: AddUserComponent,
      outlet: 'details'
      
    },
    { 
      path: 'edit-user/:id',
      component: UserDetailsComponent,
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

      path: 'restaurants',
      component: RestaurantsComponent,
      outlet: 'details'
    },
    { 
      path: 'edit-restaurant/:id',
      component: RestaurantDetailsComponent,
      outlet: 'details'
    },
    {  
      path: 'add-restaurant',
      component: AddRestaurantComponent,
      outlet: 'details'
    },
    { 
      path: 'destinations',
      component: DestinationsComponent,
      outlet: 'details'
    },
    { 
      path: 'edit-destination/:id',
      component: DestinationDetailsComponent,
      outlet: 'details'
    },
    {  
      path: 'add-destination',
      component:AddDestinationComponent,
      outlet: 'details'
    },
    { 
      path: 'hotels',
      component: HotelsComponent,
      outlet: 'details'
    },
    { 
      path: 'edit-hotel/:id',
      component: HotelDetailsComponent,
      outlet: 'details'
    },
    {  
      path: 'add-hotel',
      component:AddHotelComponent,

    {

      path: 'edit-trip/:id',
      component: TripDetailsComponent,
      outlet: 'details'
    },
  ]
  },


  {

  
    path: 'dashboard',
    redirectTo: 'dashboard/vendor',
    pathMatch: 'full'
  },
  {
    path: 'dashboard/vendor',
    component: VendorComponent,
    children: [
      { 
        path: 'users',
        component: UsersComponent,
        outlet: 'details'
      },
      {  
        path: 'add-user',
        component: AddUserComponent,
        outlet: 'details'
        
      },
      { 
        path: 'edit-user/:id',
        component: UserDetailsComponent,
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
  
        path: 'restaurants',
        component: RestaurantsComponent,
        outlet: 'details'
      },
      { 
        path: 'edit-restaurant/:id',
        component: RestaurantDetailsComponent,
        outlet: 'details'
      },
      {  
        path: 'add-restaurant',
        component: AddRestaurantComponent,
        outlet: 'details'
      },
      { 
        path: 'destinations',
        component: DestinationsComponent,
        outlet: 'details'
      },
      { 
        path: 'edit-destination/:id',
        component: DestinationDetailsComponent,
        outlet: 'details'
      },
      {  
        path: 'add-destination',
        component:AddDestinationComponent,
        outlet: 'details'
      },
      {
  
        path: 'edit-trip/:id',
        component: TripDetailsComponent,
        outlet: 'details'
      },
    ]
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