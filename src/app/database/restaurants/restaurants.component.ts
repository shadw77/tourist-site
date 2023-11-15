import { Component } from '@angular/core';
import{ RestaurantCrudService } from 'src/app/Services/restaurant-crud.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {

  Restaurants: any = [];
  restaurants: any = [];
  currentPage: number = 1;
  totalPages:any;
  totalItems: number=0;
  pageButtons: number[] = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
  searchTerm: string = '';
  selectedItem: any;
  flag:boolean=true;
  constructor(private restaurantCrudService: RestaurantCrudService){}
  ngOnInit():void{
    this.restaurantCrudService.getRestaurants().subscribe((res:any)=>{        
        this.Restaurants= res.data;
        this.restaurants=res;
        this.totalPages=res.meta.last_page;
        this.totalItems =res.meta.total;
        this.generatePageButtons();
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


  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.restaurantCrudService.Restaurants(this.currentPage).subscribe((res:any)=>{        
      this.Restaurants= res.data;
  })
  }
  generatePageButtons(): void {
    this.pageButtons = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageButtons.push(i);
    }
  }

  isAdmin(): boolean {
    const user =localStorage.getItem('role');
    return user=== 'admin';
  }

  isVendor(): boolean {
    const user = localStorage.getItem('role');
    return  user === 'vendor';
  }
  searchHotelById() {
    const searchId = parseInt(this.searchTerm, 10);
   
      if (searchId) {
        this.restaurantCrudService.searchRestaurantById(searchId).subscribe(
          (item:any) => {
           this.Restaurants = [item.data];
            console.log(this.Restaurants)
          },
          (error) => {
            console.error('Error searching hotel:', error);
          }
        );
      } 
      else {
        this.load();
      }
    }
}
