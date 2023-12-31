
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../interface/hotel';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelCrudService {
  userData:any;

  constructor(private httpClient: HttpClient) {
    const user =localStorage.getItem('userId');
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
       this.userData = JSON.parse(userDataString);
    }

   }

  REST_API: string = "http://localhost:8000/api/hotels";
  httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };

  addHotel(data: FormData): Observable<any>{
    console.log(data);
    let API_URL = this.REST_API;
    return this.httpClient.post<any>(API_URL, data,this.httpOptions).pipe(catchError(this.handleError));
  }


  getHotels(){
    if(this.userData == undefined || this.userData.role =='user'){
      this.REST_API = `${'http://localhost:8000/api/user-hotels'}`;
    }
    return this.httpClient.get(this.REST_API,this.httpOptions);
  }

  getHotel(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    
    if(this.userData == undefined ||  this.userData.role =='user'){
      API_URL = `${'http://localhost:8000/api/user-hotels'}/${id}`;
   }
    return this.httpClient.get(API_URL,this.httpOptions)
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }
  searchHotelById(id: number): Observable<any> {
    const url = `http://localhost:8000/api/hotels/search/${id}`;
    return this.httpClient.get(url,this.httpOptions);
  }
  hotels(page:any){
    let API_URL='';
    if (this.userData == undefined || this.userData.role == 'user') {
      API_URL = `http://localhost:8000/api/user-hotels?page=${page}`;
    }
    else{
      API_URL = `http://localhost:8000/api/hotels?page=${page}`;
    }
   return this.httpClient.get( API_URL,this.httpOptions);
 }
  updateHotel(id:any, data: FormData): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;  
    return this.httpClient.post<any>( API_URL , data,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  
  deleteHotel(id:any): Observable<any>{
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
