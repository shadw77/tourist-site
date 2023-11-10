import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  discountedItems: any[]=[];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    // const hotels$ = this.getDiscountedHotels().pipe(
    //   map((hotels: any[]) => hotels.map((hotel: any) => ({ ...hotel, type: "Hotel" })))
    // );
  
    // const trips$ = this.getDiscountedTrips().pipe(
    //   map((trips: any[]) => trips.map((trip: any) => ({ ...trip, type: "Trip" })))
    // );
  
    // const restaurants$ = this.getDiscountedRestaurants().pipe(
    //   map((restaurants: any[]) => restaurants.map((restaurant: any) => ({ ...restaurant, type: "Restaurant" })))
    // );
  
    // forkJoin([hotels$, trips$, restaurants$]).subscribe(([hotels, trips, restaurants]) => {
    //   this.discountedItems = [...hotels, ...trips, ...restaurants];
    // });
  }
getDiscountedHotels() {
    return this.http.get<any[]>('http://localhost:8000/api/hotels/discounted');
}
getDiscountedTrips() {
  return this.http.get<any[]>('http://localhost:8000/api/trips/discounted');
}
getDiscountedRestaurants() {
  return this.http.get<any[]>('http://localhost:8000/api/restaurants/discounted');

}
}
