import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { RestaurantCrudService } from '../Services/restaurant-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.css']
})
export class DisplayRestaurantComponent {
  Restaurents: any = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
  data : any;
  constructor(private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private restaurantCrudService: RestaurantCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      
      if (this.data) {
        this.searchDataService.searchRestaurants(this.data).then((response) => {
          this.Restaurents = response;
          console.log('Searched Restaurents:', this.Restaurents);
        });
      } else {
        this.restaurantCrudService.getRestaurants().subscribe((res) => {
          this.Restaurents = res;
          this.Restaurents = this.Restaurents['data'];
          
          console.log('All Restaurents:', this.Restaurents['data']);
        });
      }
    });
  }
}
