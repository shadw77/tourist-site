import { Component, OnInit ,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{


  constructor(private route: ActivatedRoute,
            protected auth:AuthService) { }

  ngOnInit(): void {

    /*start get user data that logged either from google or github and store it in localstorage*/
    this.route.queryParams.subscribe(params => {
      const responseParam = params['response'];
      if (responseParam) {
        const response = JSON.parse(decodeURIComponent(responseParam));
  
        const message = response['original']['mssg'];
        const status = response['original']['status'];
        const userdata = response['original']['userdata'];
        console.log(userdata);
        //console.log(response);
        this.auth.storeUserDataInLocalStorage(userdata.api_token,userdata.role,userdata.government,userdata.id,userdata);
      }
    });  
    /*end get user data that logged either from google or github and store it in localstorage*/
  
  }



}
