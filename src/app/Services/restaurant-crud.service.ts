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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjk4NTkyMTE0LCJleHAiOjE2OTg1OTU3MTQsIm5iZiI6MTY5ODU5MjExNCwianRpIjoibWRIUWE1TGx3UWZUeVFzcSIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.AFij4lYlqK83HXQU6auH0FlL3eSpNfkUazlGKnhhk9I'
    })
  };
  constructor(private httpClient: HttpClient) { }

  addRestaurant(data: FormData): Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post<any>(API_URL, data).pipe(catchError(this.handleError));
  }


  getRestaurants(){
    return this.httpClient.get(this.REST_API,this.httpOptions);
  }

  getRestaurant(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }

  updateRestaurant(id:any, data: FormData): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.post<any>(API_URL, data)
    .pipe(catchError(this.handleError));
  }

      
  deleteRestaurant(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  Restaurants(page:any){
    let API_URL = `http://localhost:8000/api/restaurants?page=${page}`;
    return this.httpClient.get( API_URL);
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




