import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../interface/trip';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  data: any;

  constructor(private http: HttpClient) { }

  searchAll(keyword: string) {
    const response  = new Promise(resolve => {
      this.http.get('http://localhost:8000/api' + `/searchAll?search_service=${keyword}`)
      .subscribe(data=>{
        resolve(data);
      }, err=>{
        console.log(err);
        
      });
    });
    
    return response;  
  }

  searchDestinations(keyword: string) {
    const response  = new Promise(resolve => {
      this.http.get('http://localhost:8000/api' + `/searchDestination?search_service=${keyword}`)
      .subscribe(data=>{
        resolve(data);
      }, err=>{
        console.log(err);
        
      });
    });
    
    return response;  
  }

  searchTrips(keyword: string) {
      const response  = new Promise(resolve => {
      this.http.get('http://localhost:8000/api' + `/searchTrip?search_service=${keyword}`)
      .subscribe(data=>{
        resolve(data);
      }, err=>{
        console.log(err);
        
      });
    });
    
    return response;
  }

  searchRestaurants(keyword: string) {
    const response  = new Promise(resolve => {
      this.http.get('http://localhost:8000/api' + `/searchRestaurant?search_service=${keyword}`)
      .subscribe(data=>{
        resolve(data);
      }, err=>{
        console.log(err);
        
      });
    });
    
    return response; 
   }

  searchHotels(keyword: string) {
    const response  = new Promise(resolve => {
      this.http.get('http://localhost:8000/api' + `/searchHotel?search_service=${keyword}`)
      .subscribe(data=>{
        resolve(data);
      }, err=>{
        console.log(err);
        
      });
    });
    
    return response; 
    }

    searchHotelsByTime(keyword: string, timeSlot: string) {
      const response = new Promise((resolve) => {
          const apiUrl = 'http://localhost:8000/api/searchHotelByTime';
          const params = new HttpParams().set('search_service', keyword).set('time_slot', timeSlot);  
          this.http.get(apiUrl, { params }).subscribe(
              (data) => {
                  resolve(data);
              },
              (err) => {
                  console.log(err);
              }
          );
      });
  
      return response;
  }
  
}
