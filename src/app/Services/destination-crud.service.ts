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
  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjk4NTg3MzIyLCJleHAiOjE2OTg1OTA5MjIsIm5iZiI6MTY5ODU4NzMyMiwianRpIjoiSnluRlhmT1RvME1DaExVSCIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.hUydZowyIPbV9_ZRzha4Ids3yTDPjoMLLS6sAx3hyMA'
  //   })
  // }; 

  constructor(private httpClient: HttpClient) { }

  addDestination( data: FormData): Observable<any>{
    console.log(data);
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

  updateDestination(id:any, data: FormData): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.post(API_URL, data )
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

  getTopDestinations(): Observable<Destination[]> {
    
    const params = {
      sort: 'rating'
    };
    return this.httpClient.get<Destination[]>( "http://localhost:8000/api/topdestinations", { params });
  }

}
