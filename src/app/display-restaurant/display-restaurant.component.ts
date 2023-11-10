import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { RestaurantCrudService } from '../Services/restaurant-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.css']
})
export class DisplayRestaurantComponent {
  Restaurents: any = [];
  imagePath: string = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
  data : any;
  products:any;
  counter:number=0;
  timeSlot=sessionStorage.getItem('time_slot');
  searchWord: any;    //start date
  endDate:any;
  faSearch = faSearch;


  constructor(    private router:Router, private cartItems:CartItemService,private CounterService:CounterService,

    private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private restaurantCrudService: RestaurantCrudService, private searchDataService: SearchDataService){}
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
          
          console.log('All Restaurents:', this.Restaurents);
        });
      }
    });
    this.CounterService.get_Counter().subscribe((val)=>{
      this.counter=val;
  });
  }
  redirectTo(item:any,count:number,type:any, time_slot:any) {
    this.cartItems.PushCartItems(item,count,type, time_slot);
    console.log(item);
    
    this.router.navigate(['cart'])


}
search() {    
  if (this.timeSlot) {
    sessionStorage.setItem('time_slot',this.timeSlot);
  
    // Handle the searchHotelsByTime method
    this.searchDataService.searchHotelsByTime(this.searchWord,this.endDate, this.timeSlot).then((response) => {
      this.data = response;
      this.Restaurents = this.data;
      this.Restaurents =this.Restaurents.data;
  
      console.log(this.data);
    });
  } else {
    // Handle the searchHotels method
    this.searchDataService.searchHotels(this.searchWord).then((response) => {
      this.Restaurents = response;
      this.Restaurents =this.Restaurents.data;
      console.log('Searched Hotels:', this.Restaurents);
    });
  }
  }
  getStartDate(event: any){
    this.searchWord = event.target.value;
    console.log(this.searchWord);
    
  }
  
  getEndDate(event: any){
    this.endDate = event.target.value;
    console.log(this.endDate);
    
  }
  
}
