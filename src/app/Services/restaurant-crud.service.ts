import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
 import { Restaurant } from '../interface/restaurant';
import { Observable, catchError, map, throwError } from 'rxjs';
import { DisplayRestaurantComponent } from '../display-restaurant/display-restaurant.component';
@Injectable({
  providedIn: 'root'
})
export class RestaurantCrudService {
  REST_API: string = "http://localhost:8000/api/restaurants";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  addRestaurant(data:Restaurant): Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
  }

  getRestaurants(){
    return this.httpClient.get(this.REST_API);
  }

  getRestaurant(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }

  updateRestaurant(id:any, data:Restaurant): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  deleteRestaurant(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else{
      errorMessage  = `Error Code: ${error.status}\n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    
  }
}