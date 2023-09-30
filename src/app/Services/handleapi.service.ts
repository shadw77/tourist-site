import { Injectable } from '@angular/core';
import datajson from '../../assets/tables.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleapiService {
  data:any;


  constructor(){
    this.data=datajson;
    //console.log(this.data);
  }


  getdata(){
    return this.data;
  }

/*
  getallproduct() :Observable<any>{
    return this.httpclient.get("https://dummyjson.com/products");

  }

  getproductdetails(pid:number) :Observable<Productinterface>{
    return this.httpclient.get<Productinterface>(`https://dummyjson.com/products/${pid}`);

  }

  searchofproduct(keyword:string):Observable<any>{
    return this.httpclient.get<Productinterface[]>(`https://dummyjson.com/products/search?q=${keyword}`);

  }

  */
}
