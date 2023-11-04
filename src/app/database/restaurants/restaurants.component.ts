import { Component } from '@angular/core';
import{ RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {

  Restaurants: any = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
  constructor(private restaurantCrudService: RestaurantCrudService){}
  ngOnInit():void{
    this.restaurantCrudService.getRestaurants().subscribe(res=>{        
        this.Restaurants= res;
        console.log(this.Restaurants['data']);
    })
  }
load(){
  this.restaurantCrudService.getRestaurants().subscribe(updatedRes => {
    this.Restaurants = updatedRes;
  });
}
  delete(id: any, i: any) {
    console.log(id);
    this.restaurantCrudService.deleteRestaurant(id).subscribe(res => {
      this.load();
    });
  }
 
}

