// import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { UserOrder } from '../interface/user';
// import { Observable, catchError, map, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserOrderCrudService {
//   REST_API: string = "http://localhost:8000/api/orders";
//   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  

//   constructor(private httpClient: HttpClient) { }

//   addUserOrder(data:UserOrder): Observable<any>{
//     let API_URL = this.REST_API;
//     return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
//   }

//   getUserOrders(){
//     return this.httpClient.get(this.REST_API);
//   }

//   getUserOrder(id:any): Observable<any>{
//     let API_URL = `${this.REST_API}/${id}`;
//     return this.httpClient.get(API_URL, {headers: this.httpHeaders})
//     .pipe(map((res: any)=>{return res || {}}),
//       catchError(this.handleError));
//   }

//   updateUserOrder(id:any, data: UserOrder): Observable<any>{
//     let API_URL = `${this.REST_API}/${id}`;
//     return this.httpClient.put(API_URL, data, {headers: this.httpHeaders})
//     .pipe(catchError(this.handleError));
//   }

//   deleteUser(id:any): Observable<any>{
//     let API_URL = `${this.REST_API}/${id}`;
//     return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
//     .pipe(catchError(this.handleError));
//   }

//   handleError(error: HttpErrorResponse){
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent){
//       errorMessage = error.error.message;
//     }
//     else{
//       errorMessage  = `Error Code: ${error.status}\n Message: ${error.message}`
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
    
//   }
// }


