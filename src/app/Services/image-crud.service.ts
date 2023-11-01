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
  

  // updateImage(imageId: number, image: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('image', image, image.name);
  //   let API_URL = `${this.REST_API}/${imageId}`;
  //   return this.httpClient.post<any>( API_URL, formData);
  // }
  updateImage(id:any, data: FormData): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;  
    return this.httpClient.post<any>(API_URL , data)
    .pipe(catchError(this.handleError));
  }

  deleteImage(id:any): Observable<any>{
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
