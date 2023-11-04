import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationCrudService } from '../Services/destination-crud.service';
import { HotelCrudService } from '../Services/hotel-crud.service';
import { TripCrudService } from '../Services/trip-crud.service';
import { RestaurantCrudService } from '../Services/restaurant-crud.service';
import { SearchDataService } from '../Services/search-data.service';

@Component({
  selector: 'app-display-services',
  templateUrl: './display-services.component.html',
  styleUrls: ['./display-services.component.css']
})
export class DisplayServicesComponent {

  Destinations: any = [];
  Hotels: any = [];
  Trips: any=[];
  Restaurents: any=[];
  Services: any=[];

  data : any;
  constructor(private activatedRoute: ActivatedRoute,private route: ActivatedRoute,
    private destinationCrudService: DestinationCrudService,
    private restaurantCrudService:RestaurantCrudService,
    private tripCrudService:TripCrudService,
    private hotelCrudService:HotelCrudService,
    private searchDataService: SearchDataService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      if (this.data) {
        Promise.all([
          this.searchDataService.searchDestinations(this.data),
          this.searchDataService.searchTrips(this.data),
          this.searchDataService.searchHotels(this.data),
          this.searchDataService.searchRestaurants(this.data)
        ]).then(([destinations, trips, restaurants, hotels]) => {
          this.Destinations = destinations;
          this.Trips = trips;
          this.Restaurents = restaurants;
          this.Hotels = hotels;
          this.Services = [...this.Destinations, ...this.Trips, ...this.Restaurents, ...this.Hotels];
        });
      } else {
        Promise.all([
          this.destinationCrudService.getDestinations().toPromise(),
          this.tripCrudService.getTrips().toPromise(),
          this.hotelCrudService.getHotels().toPromise(),
          this.restaurantCrudService.getRestaurants().toPromise()
        ]).then(([destinations, trips, restaurants, hotels]) => {
          this.Destinations = destinations;
          this.Destinations = this.Destinations['destinations']
          this.Trips = trips; 
          this.Trips = this.Trips['data'];
          this.Hotels = hotels; 
          this.Hotels = this.Hotels['data'];
          this.Restaurents = restaurants;
          this.Restaurents = this.Restaurents['data'];
          this.Services = [...this.Destinations, ...this.Trips, ...this.Restaurents, ...this.Hotels ];
        });
      }
    });
   }
}