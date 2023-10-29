import { Injectable } from '@angular/core';
import datajson from '../../assets/tables.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleapiService {
  data:any;


  constructor(private httpclient:HttpClient){
    this.data=datajson;
    //console.log(this.data);
    
  }


  getdata(){
    return this.data;
  }


  /*start function to get nearby places from api*/
  getNearbyPlaces() :Observable<any>{
    return this.httpclient.get("http://localhost:8000/api/get-nearbyplaces");
  }
  /*end function to get nearby places from api*/

  /*start function that retrieve review that belong to nearbyplaces*/
  getReviewNearByPlaces() :Observable<any>{
    return this.httpclient.get("http://localhost:8000/api/get-review-nearbyplaces");
  }
  /*end function that retrieve review that belong to nearbyplaces*/


}
