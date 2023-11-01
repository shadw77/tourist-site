import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelCrudService {
  REST_API: string = "http://localhost:8000/api/hotels";

  constructor(private httpClient: HttpClient) { }

  addHotel(data: FormData): Observable<any> {
    let API_URL = this.REST_API;
    // Set the headers for file upload
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('enctype', 'multipart/form-data');

    return this.httpClient.post(API_URL, data, { headers: httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  getHotels(): Observable<any> {
    let API_URL = this.REST_API;
    return this.httpClient.get(API_URL).pipe(
      catchError(this.handleError)
    );
  }

  getHotel(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL).pipe(
      catchError(this.handleError)
    );
  }

  updateHotel(id: any, data: FormData): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
  
    return this.httpClient.put(API_URL, data).pipe(
      catchError(this.handleError)
    );
  }
  

  deleteHotel(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}, Message: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
