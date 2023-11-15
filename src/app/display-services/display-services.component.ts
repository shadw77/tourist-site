import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  Trips: any = [];
  Restaurents: any = [];
  Services: any = [];
  types: any = [];

  imagePaths: any;
  imagePath: any;

  data: any;
  currentPage: number = 1;
  totalPages: any;
  totalItems: number = 0;
  pageButtons: number[] = [];
  service: any;
  itemsPerPage: number = 5;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private destinationCrudService: DestinationCrudService,
    private restaurantCrudService: RestaurantCrudService,
    private tripCrudService: TripCrudService,
    private hotelCrudService: HotelCrudService,
    private searchDataService: SearchDataService
  ) {}

  ngOnInit(): void {
    this.imagePaths = {
      Hotel: 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/',
      Restaurant: 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/',
      Trip: 'http://127.0.0.1:8000/images/trip_images/thumbnails/',
      Destination: 'http://127.0.0.1:8000/images/destination_images/thumbnails/'
    };

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      if (this.data) {
        Promise.all([
          this.searchDataService.searchDestinations(this.data),
          this.searchDataService.searchTrips(this.data),
          this.searchDataService.searchRestaurants(this.data),
          this.searchDataService.searchHotels(this.data)
        ]).then(([destinations, trips, restaurants, hotels]) => {
          this.Destinations = destinations;
          this.Trips = trips;
          this.Restaurents = restaurants;
          this.Hotels = hotels;
          this.Services = [...this.Destinations, ...this.Trips, ...this.Restaurents, ...this.Hotels];

          if (this.Destinations.length > 0) {
            this.types.push(...Array(this.Destinations.length).fill('Destination'));
          }

          if (this.Trips.length > 0) {
            this.types.push(...Array(this.Trips.length).fill('Trip'));
          }

          if (this.Restaurents.length > 0) {
            this.types.push(...Array(this.Restaurents.length).fill('Restaurant'));
          }

          if (this.Hotels.length > 0) {
            this.types.push(...Array(this.Hotels.length).fill('Hotel'));
          }

          console.log(this.types);

          for (let i = 0; i < this.Services.length; i++) {
            const currentProductType = this.types[i];
            const currentImagePath = this.imagePaths[currentProductType];
            this.imagePath = currentImagePath;
          }
        });
      } else {
        Promise.all([
          this.destinationCrudService.getDestinations().toPromise(),
          this.tripCrudService.getTrips().toPromise(),
          this.restaurantCrudService.getRestaurants().toPromise(),
          this.hotelCrudService.getHotels().toPromise()
        ]).then(([destinations, trips, restaurants, hotels]) => {
          this.Destinations = destinations;
          this.Destinations = this.Destinations['destinations']['data'];
          this.Trips = trips;
          this.Trips = this.Trips['data'];

          this.Restaurents = restaurants;
          this.Restaurents = this.Restaurents['data'];
          this.Hotels = hotels;
          this.Hotels = this.Hotels['data'];

          this.Services = [...this.Destinations, ...this.Trips, ...this.Restaurents, ...this.Hotels];

          this.loadData();
        });
      }
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadData();
  }

  private loadData(): void {
    Promise.all([
      this.destinationCrudService.Destinations(this.currentPage).toPromise(),
      this.tripCrudService.Trips(this.currentPage).toPromise(),
      this.restaurantCrudService.Restaurants(this.currentPage).toPromise(),
      this.hotelCrudService.hotels(this.currentPage).toPromise()
    ]).then(([d, t, r, h]) => {
      this.Destinations = d;
      this.Destinations = this.Destinations['destinations']['data'];
      this.Trips = t;
      this.Trips = this.Trips['data'];
      this.Restaurents = r;
      this.Restaurents = this.Restaurents['data'];
      this.Hotels = h;
      this.Hotels = this.Hotels['data'];

      this.Services = [...this.Destinations, ...this.Trips, ...this.Restaurents, ...this.Hotels];

      this.totalItems = this.Services.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pageButtons = Array(this.totalPages)
        .fill(0)
        .map((x, i) => i + 1);

      this.service = this.Services.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );

      this.types = [];
      if (this.Destinations.length > 0) {
        this.types.push(...Array(this.Destinations.length).fill('Destination'));
      }

      if (this.Trips.length > 0) {
        this.types.push(...Array(this.Trips.length).fill('Trip'));
      }

      if (this.Restaurents.length > 0) {
        this.types.push(...Array(this.Restaurents.length).fill('Restaurant'));
      }

      if (this.Hotels.length > 0) {
        this.types.push(...Array(this.Hotels.length).fill('Hotel'));
      }

      console.log(this.types);

      for (let i = 0; i < this.service.length; i++) {
        const currentProductType = this.types[i];
        const currentImagePath = this.imagePaths[currentProductType];
        this.imagePath = currentImagePath;
      }
    });
  }
  viewDetails(data: any,name:string ) {
    this.router.navigate(['discover', `${name}-detailsD`], { state: {  data } });
  }
}