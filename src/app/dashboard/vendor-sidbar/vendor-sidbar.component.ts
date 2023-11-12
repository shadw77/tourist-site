import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-vendor-sidbar',
  templateUrl: './vendor-sidbar.component.html',
  styleUrls: ['./vendor-sidbar.component.css']
})
export class VendorSidbarComponent {
  status = false;
  data : any;
  addToggle()
  {
    this.status = !this.status;       
  }
  constructor(private http: HttpClient, private auth:AuthService){
    //get request from web api
    this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(data => {
      this.data = data;
    
          }, error => console.error(error));
  }



  getlogut(){
    this.auth.logout().subscribe(data=>{
      this.data = data;
        console.log(data);
    }, error => console.error(error)  
   );
  }
}
