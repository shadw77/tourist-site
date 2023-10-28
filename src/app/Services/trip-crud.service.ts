import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../interface/trip';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripCrudService {

  REST_API: string = "http://localhost:8000/api/trips";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  

  constructor(private httpClient: HttpClient) { }

  addTrip(data:Trip): Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
  }

  getTrips(){
    return this.httpClient.get(this.REST_API);
  }

  getTrip(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.post(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }

  updateTrip(id:any, data: Trip): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  deleteTrip(id:any): Observable<any>{
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

