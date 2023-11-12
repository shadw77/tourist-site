import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { authGuard } from 'src/app/Guard/auth.guard';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
