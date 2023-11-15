import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Restaurant } from "../interface/restaurant";
import { Observable, catchError, map, throwError } from "rxjs";
import { DisplayRestaurantComponent } from "../display-restaurant/display-restaurant.component";
@Injectable({
  providedIn: "root",
})
export class RestaurantCrudService {
  userData: any;
  REST_API: string = "http://localhost:8000/api/restaurants";
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("api_token")}`,
    }),
  };
  constructor(private httpClient: HttpClient) {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
    }
  }

  addRestaurant(data: FormData): Observable<any> {
    let API_URL = this.REST_API;
    return this.httpClient
      .post<any>(API_URL, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getRestaurants() {
    console.log("User data", this.userData);

    if (this.userData == undefined || this.userData.role == 'user') {
      this.REST_API = `${"http://localhost:8000/api/user-restaurants"}`;
    }
    return this.httpClient.get(this.REST_API, this.httpOptions);
  }

  getRestaurant(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    if (this.userData == undefined || this.userData.role == 'user') {
      API_URL = `${"http://localhost:8000/api/user-restaurants"}/${id}`;
    }
    return this.httpClient.get(API_URL, this.httpOptions).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  searchRestaurantById(id: number): Observable<any> {
    const url = `http://localhost:8000/api/restaurants/search/${id}`;
    return this.httpClient.get(url,this.httpOptions);
  }
  updateRestaurant(id: any, data: FormData): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient
      .post<any>(API_URL, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteRestaurant(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient
      .delete(API_URL, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Restaurants(page: any) {
    let API_URL='';
    if (this.userData == undefined || this.userData.role == 'user') {
      API_URL = `http://localhost:8000/api/user-restaurants?page=${page}`;
    }
    else{
     API_URL = `http://localhost:8000/api/restaurants?page=${page}`;
    }
    return this.httpClient.get(API_URL, this.httpOptions);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
