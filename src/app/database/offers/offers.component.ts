import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  discountedItems: any[]=[];
   hotels:any[] = [];
   trips:any[] = [];
   restaurants:any[] = [];
   combinedData:any[]=[];

   httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };



  constructor(private http: HttpClient) { }


  ngOnInit() {//start ngoninit
  
    this.getDiscountedHotels().subscribe((res:any)=>{
        this.hotels=res;
        //console.log( this.hotels);
    });
  this.getDiscountedTrips().subscribe((res:any)=>{
      this.trips=res;
      // console.log(this.trips);

    })
    this.getDiscountedRestaurants().subscribe((res:any)=>{
          this.restaurants=res;
          //console.log(this.restaurants);
    });

    // Assuming you have three separate methods for fetching hotels, trips, and restaurants
    const hotels$ = this.getDiscountedHotels();
    const trips$ = this.getDiscountedTrips();
    const restaurants$ = this.getDiscountedRestaurants();

    forkJoin([hotels$, trips$, restaurants$]).subscribe(([hotels, trips, restaurants]) => {
      this.hotels = [hotels];
      this.trips = [trips];
      this.restaurants = [restaurants];
      this.combineData();
    });
  
  }//end ngoninit


  
  getDiscountedHotels() {
    return this.http.get<any[]>('http://localhost:8000/api/hotels/discounted',this.httpOptions);
  }
  getDiscountedTrips() {
    return this.http.get<any[]>('http://localhost:8000/api/trips/discounted',this.httpOptions).pipe(
      tap((response:any) => {
        //console.log(response);
      }));
  }
  getDiscountedRestaurants() {
    return this.http.get<any[]>('http://localhost:8000/api/restaurants/discounted',this.httpOptions);

  }


  combineData() {

    if (this.hotels && this.trips && this.restaurants) {
      this.combinedData = [...this.hotels, ...this.trips, ...this.restaurants];
       this.discountedItems = Object.values(this.combinedData).map(innerObject => innerObject[1]);
       console.log(this.discountedItems);
    }
  } 


}
