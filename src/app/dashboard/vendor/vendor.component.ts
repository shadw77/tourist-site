import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent {
  status = false;
  data : any;
  addToggle()
  {
    this.status = !this.status;       
  }
  constructor(private http: HttpClient){
  //get request from web api
    this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(data => {
      this.data = data;
    
          }, error => console.error(error));
  }
}
