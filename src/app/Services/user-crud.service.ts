import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable, catchError, map, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  REST_API: string = "http://localhost:8000/api/users";
  httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };

  constructor(private httpClient: HttpClient) { }

  searchHotelById(id: number): Observable<any> {
    const url = `http://localhost:8000/api/users/search/${id}`;
    return this.httpClient.get(url,this.httpOptions);
  }

  addUser(data:User): Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL, data,this.httpOptions).pipe(catchError(this.handleError));
  }

  getUsers(){
    return this.httpClient.get(this.REST_API,this.httpOptions);
  }

  getUser(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL,this.httpOptions)
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }

  updateUser(id:any, data: User): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteUser(id:any): Observable<any>{
    console.log(id);
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL,this.httpOptions)
    tap(response => {
        //console.log( "ddddd");
    });
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


