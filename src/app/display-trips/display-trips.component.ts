import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { TripCrudService } from '../Services/trip-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-display-trips',
  templateUrl: './display-trips.component.html',
  styleUrls: ['./display-trips.component.css']
})
export class DisplayTripsComponent {  
  Trips: any = [];
  data : any;
  products:any;
  counter:number=0;
  timeSlot=sessionStorage.getItem('time_slot');
  searchWord: any;    //start date
  endDate:any;
  faSearch = faSearch;


  imagePath: string = 'http://127.0.0.1:8000/images/trips_images/thumbnails/';

  constructor(private CounterService:CounterService,
    private router:Router,private cartItems:CartItemService,
    private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private tripCrudService: TripCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      
      if (this.data) {
        this.searchDataService.searchTrips(this.data).then((response) => {
          this.Trips = response;
          console.log('Searched trips:', this.Trips);
        });
      } else {
        this.tripCrudService.getTrips().subscribe((res) => {
          this.Trips = res;
          this.Trips = this.Trips['data'];
          
          console.log('All trips:', this.Trips['data']);
        });
      }
    });
    this.CounterService.get_Counter().subscribe((val)=>{
      this.counter=val;
  });
  }
  search() {    
    if (this.timeSlot) {
      sessionStorage.setItem('time_slot',this.timeSlot);
    
      // Handle the searchHotelsByTime method
      this.searchDataService.searchHotelsByTime(this.searchWord,this.endDate, this.timeSlot).then((response) => {
        this.data = response;
        this.Trips = this.data;
        this.Trips =this.Trips.data;
    
        console.log(this.data);
      });
    } else {
      // Handle the searchHotels method
      this.searchDataService.searchHotels(this.searchWord).then((response) => {
        this.Trips = response;
        this.Trips =this.Trips.data;
        console.log('Searched Hotels:', this.Trips);
      });
    }
    }
  redirectTo(item:any,count:number,type:any,timeSlot:any) {
    this.cartItems.PushCartItems(item,count,type,timeSlot);
    console.log(item);
    
    this.router.navigate(['cart'])

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
