import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserOrder } from '../interface/user-order';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserOrderCrudService {
  REST_API: string = "http://localhost:8000/api/orders";
  httpOptions={
    headers:new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };

   userId:any=localStorage.getItem("userId");


  constructor(private httpClient: HttpClient) { }

  addUserOrder(data:FormData): Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL, data,this.httpOptions).pipe(catchError(this.handleError));
  }

  getUserOrders(){
    return this.httpClient.get(this.REST_API,this.httpOptions);
  }
  getAllUserOrders(userId: any): Observable<any> {
    const API_URL = `${this.REST_API}/?userId=${userId}`;
    
    return this.httpClient.get(API_URL,this.httpOptions)
      .pipe(
        map((res: any) => res || {}),
        catchError(this.handleError)
      );
  }

  getUserOrder(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL,this.httpOptions)
    .pipe(map((res: any)=>{return res || {}}),
      catchError(this.handleError));
  }
  getOrderDetails(orderId: number) {
    return this.httpClient.get<any>(`http://localhost:8000/api/ordersdetails/${orderId}`,this.httpOptions);
  }
  updateUserOrder(id:any, data: UserOrder): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteUserOrder(id:any): Observable<any>{
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
    console.log(errorMessage);
    return throwError(errorMessage);
    
  }
  orders(page:any){
    let API_URL = `http://localhost:8000/api/orders?page=${page}`;
   return this.httpClient.get( API_URL);
 }

  /*start function that call payment api*/
  callPayment(){
    const id=this.userId;
    
    //console.log(object);
    window.location.href=  'http://localhost:8000/api/orders/payment';

    /*return this.httpClient.post<any>(`http://localhost:8000/api/orders/payment`,{}).pipe(
      tap(response => {

      }));*/
  }
  /*end function that call payment api*/



  
}


