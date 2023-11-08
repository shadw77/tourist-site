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
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };

  constructor(private httpClient: HttpClient) { }

  addTrip(data:FormData): Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL,data,this.httpOptions).pipe(catchError(this.handleError));
  }
  Trips(page:any){
     let API_URL = `http://localhost:8000/api/trips?page=${page}`;
    return this.httpClient.get( API_URL);
  }
  getTrips(){
    return this.httpClient.get(this.REST_API);
  }

  getTrip(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }
  updateTrip(id:any, data: FormData): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;  
    return this.httpClient.post<any>( API_URL , data,{
      responseType: 'json'
    })
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

