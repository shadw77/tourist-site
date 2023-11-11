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
  constructor(private http: HttpClient) { }
  ngOnInit() {
   
    this.getDiscountedHotels().subscribe((res:any)=>{
        this.hotels=res;
        console.log(res);
        this.combineData(); 
    });
  this.getDiscountedTrips().subscribe((res:any)=>{
       this.trips=res;
       this.combineData(); 
    })
    this.getDiscountedRestaurants().subscribe((res:any)=>{
          this.restaurants=res;
          console.log(this.restaurants);
          this.combineData(); 
    });

    // ...
    
    // Assuming you have three separate methods for fetching hotels, trips, and restaurants
    const hotels$ = this.getDiscountedHotels();
    const trips$ = this.getDiscountedTrips();
    const restaurants$ = this.getDiscountedRestaurants();
  
    // forkJoin([hotels$, trips$, restaurants$]).subscribe(([hotels, trips, restaurants]) => {
    //   this.discountedItems = [...hotels, ...trips, ...restaurants];
    // });
  }
  httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };
  combineData() {
    this.combinedData = [...this.hotels, ...this.trips, ...this.restaurants];
    console.log("ffffffffffffffffffffffff")
    console.log(this.combineData);
  } 
getDiscountedHotels() {
    return this.http.get<any[]>('http://localhost:8000/api/hotels/discounted',this.httpOptions);
}
getDiscountedTrips() {
  return this.http.get<any[]>('http://localhost:8000/api/trips/discounted',this.httpOptions).pipe(
    tap((response:any) => {
      console.log(response);
    }));
}
getDiscountedRestaurants() {
  return this.http.get<any[]>('http://localhost:8000/api/restaurants/discounted',this.httpOptions);

}
}
