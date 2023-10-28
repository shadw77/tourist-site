import { Component } from '@angular/core';
import{ RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {

  Restaurants: any = [];

  constructor(private restaurantCrudService: RestaurantCrudService){}
  ngOnInit():void{
    this.restaurantCrudService.getRestaurants()  .subscribe(res=>{        
        this.Restaurants= res;
        console.log(this.Restaurants['data']);
    })
  }

  delete(id:any, i:any){
    console.log(id);
    this.restaurantCrudService.deleteRestaurant(id).subscribe(res=>{
      this.Restaurants.splice(i,1);
  })
    
   
  }

}