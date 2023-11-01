import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


interface RegisterResponse {
  status: number;
  mssg: string;
  userdata: {
    api_token: string;
    id: number;
    name: string;
    email: string;
    government: string;
    street: string;
    mobile: string;
    role: string;
    // Add other properties as needed
  };
}
interface logoutResponse {
  status: number;
  mssg: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiuUrl:string="http://localhost:8000/api";
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${localStorage.getItem('api_token')}`
    })
  };


  constructor(private httpClient:HttpClient,
        private router: Router) { }

  /*start login function that call api*/
  login(user:{email: string, password: string}):Observable<any>{
    return this.httpClient.post<RegisterResponse>(`${this.apiuUrl}/login`,user).pipe(
      tap(response => {
      
        if(response.status == 200){
          console.log(response);
          this.storeUserDataInLocalStorage(response.userdata.api_token,response.userdata.role,
            response.userdata.government,response.userdata);
        }
      }));
  }
  /*end login function that call api*/


  /*start register function that call api*/
  register( user:{email: string,name: string, password: string,government:string} ) :Observable<any>{
    //console.log(user);
    return this.httpClient.post<RegisterResponse>(`${this.apiuUrl}/register`,user).pipe(
      tap(response => {
        //console.log(response);
        if(response.status != 400){
          this.storeUserDataInLocalStorage(response.userdata.api_token,response.userdata.role,
            response.userdata.government,response.userdata);
        }
      }));
  }
  /*end register function that call api*/

  /*start function that store coming user data in localstorage*/
  storeUserDataInLocalStorage(api_token:string,role:string,government:string,userData:any){
    localStorage.setItem("api_token", api_token);
    localStorage.setItem("role", role);
    localStorage.setItem("government", government);
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  /*end function that store coming user data in localstorage*/

  isAuthenticated(): boolean {
    const token = localStorage.getItem('api_token');
    return !!token; // Return true if the token is present, false otherwise
  }

  logout():Observable<any>{
    return this.httpClient.get<logoutResponse>(`${this.apiuUrl}/logout`,this.httpOptions).pipe(
      tap(response => {
        if(response.status == 200){
          //console.log(response);

          localStorage.clear();
        }
      }));
    //this.router.navigate(['/login']);
  }

  
}
