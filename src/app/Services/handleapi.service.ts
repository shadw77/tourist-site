import { Injectable } from '@angular/core';
import datajson from '../../assets/tables.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Observable } from 'rxjs';
interface logoutResponse {
  status: number;
  mssg: string;
}
interface Response {
  status: number;
  mssg: string;
}

@Injectable({
  providedIn: 'root'
})
export class HandleapiService {
  data:any;
  // ServiceData:any;
  private apiUrl:string="http://localhost:8000/api";   

  governments=['Sharm El Sheikh','Hurghada','Cairo','Ain Sukhna','Mersa Matruh','Alexandria','Marsa Alam',
  'El Alamein','Dahab','Luxor','Aswan'];

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };


  constructor(private httpclient:HttpClient){
    this.data=datajson;
    //console.log(this.data);
    
  }


  getdata(){
    return this.data;
  }


  /*start function to get nearby places from api*/
  getNearbyPlaces(city:string|null) :Observable<any>{
    return this.httpclient.get(`${this.apiUrl}/get-nearbyplaces/${city}`);
  }
  /*end function to get nearby places from api*/

  /*start function that retrieve review that belong to nearbyplaces*/
  getReviewNearByPlaces(city:string|null) :Observable<any>{
    return this.httpclient.get(`${this.apiUrl}/get-review-nearbyplaces/${city}`);
  }
  /*end function that retrieve review that belong to nearbyplaces*/

  /*start function to get top attraction places from api*/
  getTopAttractions():Observable<any>{
    return this.httpclient.get(`${this.apiUrl}/get-topattractions-places`);
  }
  /*end function to get top attraction places from api*/

  /*start function that retrieve review that belong to top attractions*/
  getReviewTopAttractions():Observable<any>{
    return this.httpclient.get(`${this.apiUrl}/get-review-topattractions-places`)
  }
  /*end function that retrieve review that belong to top attractions*/

  /*start function to get offers places from api*/
  getOffers():Observable<any>{
    return this.httpclient.get(`${this.apiUrl}/get-offers-places`);
  }
  /*end function to get offers places from api*/

  /*start function that retrieve review that belong to offers*/
  getReviewOffers():Observable<any>{
    return this.httpclient.get(`${this.apiUrl}/get-review-offers-places`)
  }
  /*end function that retrieve review that belong to offers*/



  /*start function that get our governments*/
  getGovernemnt(){
    return this.governments;
  }
  /*end function that get our governments*/


  /*start function that store review*/
   storeReview(object:any,review:any,userID:any):Observable<any>{
    const data = {
      object: object,
      review: review,
      userID:userID
    };
    //console.log(data);
    return this.httpclient.post<Response>(`${this.apiUrl}/review`,data).pipe(
      tap(response => {
        if(response.status == 200){
          //console.log(response);
        }
      }));
  }
  /*end function that store review*/


  /*start function that get review by id*/ 
  getReviewById(object:any):Observable<any>{

    //console.log(object);
    return this.httpclient.post<any>(`${this.apiUrl}/get-review`,object).pipe(
      tap(response => {
        if(response){
          //console.log(response);
        }
      }));
  }
  /*end function that get review by id*/



  /*start function that test retrieve data under jwt token*/
  getTestData( review: any, userID: any):Observable<any>{
    const data = {
      review: review,
      userID: userID
    };
    return this.httpclient.post<any>(`${this.apiUrl}/get-test-data`,data,this.httpOptions ).pipe(
      tap(response => {
        //console.log(this.httpOptions);
        if(response.status == 200){
        console.log(response);
        }
      }));
  }
  /*end function that test retrieve data under jwt token*/
  
  

}
