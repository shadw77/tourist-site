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

  /*start function that get our governments*/
  getGovernemnt(){
    return this.governments;
  }
  /*end function that get our governments*/


  /*start function that store review*/
   storeReview(object:any,review:any):Observable<any>{
    const data = {
      object: object,
      review: review
    };
    console.log(data);
    return this.httpclient.post<Response>(`${this.apiUrl}/review`,data).pipe(
      tap(response => {
        if(response.status == 200){
          console.log(response);

        }
      }));
  }
  /*end function that store review*/


  /*start function that test retrieve data under jwt token*/
  getTestData():Observable<any>{
    return this.httpclient.get<logoutResponse>(`${this.apiUrl}/get-test-data` ).pipe(
      tap(response => {
        //console.log(this.httpOptions);
        if(response.status == 200){
        console.log(response);
        }
      }));
  }
  /*end function that test retrieve data under jwt token*/
  
  

}
