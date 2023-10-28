import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination  } from '../interface/destination';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationCrudService {

  REST_API: string = "http://localhost:8000/api/destinations";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  

  constructor(private httpClient: HttpClient) { }

  addDestination(data:Destination): Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
  }

  getDestinations(){
    return this.httpClient.get(this.REST_API);
  }

  getDestination(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }

  updateDestination(id:any, data: Destination): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  deleteDestination(id:any): Observable<any>{
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
