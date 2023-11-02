import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../interface/trip';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private http: HttpClient) { }

  searchAll(keyword: string): Observable<any> {
    return this.http.get('http://localhost:8000/api/searchAll', { params: { keyword } });
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
}
