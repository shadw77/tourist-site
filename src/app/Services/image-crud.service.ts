import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../interface/hotel';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageCrudService {
  constructor(private httpClient: HttpClient) { }
  REST_API: string = "http://localhost:8000/api/images";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };
  
  addImage(  data: FormData): Observable<any> {
    let API_URL = `${this.REST_API}`;
    return this.httpClient.post<any>( API_URL, data,this.httpOptions);
  }

  updateImage(id:any, data: FormData): Observable<any>{
   
    let API_URL = `${this.REST_API}/${id}`;  
    return this.httpClient.post<any>(API_URL , data,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteImage(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL,this.httpOptions)
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
