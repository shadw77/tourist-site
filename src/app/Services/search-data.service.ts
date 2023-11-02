import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../interface/trip';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private http: HttpClient) { }

  getSearchServiceName(name:string){
    const response  = new Promise(resolve => {
      this.http.get('http://localhost:8000/api' + `/trips/searchTrip?search_trip=${name}`)
      .subscribe(data=>{
        resolve(data);
      }, err=>{
        console.log(err);
        
      });
    });

    return response;
  }


  searchAll(keyword: string): Observable<any> {
    return this.http.get('http://localhost:8000/api/searchAll', { params: { keyword } });
  }

  searchDestinations(keyword: string): Observable<any> {
    return this.http.get('http://localhost:8000/api/searchDestinations', { params: { keyword } });
  }

  searchTrips(keyword: string) {
    
    // return this.http.get('http://localhost:8000/api/searchTrip?search_service/', { params: { keyword } });
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

  searchRestaurants(keyword: string): Observable<any> {
    return this.http.get('http://localhost:8000/api/searchRestaurants', { params: { keyword } });
  }

  searchHotels(keyword: string): Observable<any> {
    return this.http.get('http://localhost:8000/api/searchHotels', { params: { keyword } });
  }
}
