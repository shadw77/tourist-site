import { Injectable } from '@angular/core';
import datajson from '../../assets/tables.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleapiService {
  data:any;
  //apiToken = localStorage.getItem("api_token");
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
  getNearbyPlaces(city:string) :Observable<any>{
    return this.httpclient.get(`http://localhost:8000/api/get-nearbyplaces/${city}`);
  }
  /*end function to get nearby places from api*/

  /*start function that retrieve review that belong to nearbyplaces*/
  getReviewNearByPlaces(city:string) :Observable<any>{
    return this.httpclient.get(`http://localhost:8000/api/get-review-nearbyplaces/${city}`);
  }
  /*end function that retrieve review that belong to nearbyplaces*/

  /*start function to get top attraction places from api*/
  getTopAttractions():Observable<any>{
    return this.httpclient.get(`http://localhost:8000/api/get-topattractions-places`);
  }
  /*end function to get top attraction places from api*/

  /*start function that retrieve review that belong to top attractions*/
  getReviewTopAttractions():Observable<any>{
    return this.httpclient.get(`http://localhost:8000/api/get-review-topattractions-places`)
  }
  /*end function that retrieve review that belong to top attractions*/

  /*start function that test retrieve data under jwt token*/
  getTestData():Observable<any>{
    return this.httpclient.get(`http://localhost:8000/api/get-test-data`, this.httpOptions )
  }
  /*end function that test retrieve data under jwt token*/
  
  

}
