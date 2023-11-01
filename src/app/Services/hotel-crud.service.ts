import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../interface/hotel';
import { Observable, catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelCrudService {

  constructor(private httpClient: HttpClient) { }
  REST_API: string = "http://localhost:8000/api/hotels";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  addHotel(data: FormData): Observable<any>{
    console.log(data);
    let API_URL = this.REST_API;
    return this.httpClient.post<any>(API_URL, data).pipe(catchError(this.handleError));
  }

  getHotels(){
    return this.httpClient.get(this.REST_API);
  }

  getHotel(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }

  updateHotel(id:any, data: FormData): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;  
    return this.httpClient.post<any>( API_URL , data)
    .pipe(catchError(this.handleError));
  }
  
  deleteHotel(id:any): Observable<any>{
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
    return throwError(errorMessage);
    
  }
}