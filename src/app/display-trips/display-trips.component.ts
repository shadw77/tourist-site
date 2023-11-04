import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { TripCrudService } from '../Services/trip-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {CartItemService} from 'src/app/Services/cart-item.service'
import {CounterService} from 'src/app/Services/counter.service'
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
  redirectTo(item:any,count:number,type:any) {
    this.cartItems.PushCartItems(item,count,type);
    console.log(item);
    
    this.router.navigate(['cart'])

  }
}
