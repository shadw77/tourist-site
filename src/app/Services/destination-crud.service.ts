import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination  } from '../interface/destination';
import { Observable, catchError, map, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationCrudService {

  userData:any;
  REST_API: string = "http://localhost:8000/api/destinations";
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };

  constructor(private httpClient: HttpClient) {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
       this.userData = JSON.parse(userDataString);
    }

   }

  addDestination( data: FormData): Observable<any>{
    console.log(data);
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL, data,this.httpOptions).pipe(catchError(this.handleError));
  }

  getDestinations(){
    if(this.userData.role=='user'){
      this.REST_API = `${'http://localhost:8000/api/user-destinations'}`;      
    }
    console.log(this.httpClient.get(this.REST_API));
    
    return this.httpClient.get(this.REST_API,this.httpOptions);
  }
  Destinations(page:any){
    let API_URL = `http://localhost:8000/api/destinations?page=${page}`;
   return this.httpClient.get( API_URL,this.httpOptions);
 }
  getDestination(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    if(this.userData.role==='user'){
      API_URL = `${'http://localhost:8000/api/user-destinations'}/${id}`;
      
   }
    return this.httpClient.get(API_URL,this.httpOptions)
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }

  updateDestination(id:any, data: FormData): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.post(API_URL, data ,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteDestination(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, this.httpOptions)
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
    return this.httpClient.get<Destination[]>( "http://localhost:8000/api/topDestinations", { params });
  }
  getTestData():Observable<any>{
    return this.httpClient.get<any>('http://localhost:8000/api/get-test-data', this.httpOptions ).pipe(
      tap((response:any )=> {
        //console.log(this.httpOptions);
        if(response.status == 200){
        console.log(response);
        }
      }));
  }
}
