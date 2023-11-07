import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of,BehaviorSubject } from 'rxjs';
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

interface passwordResponse {
  status: number;
  mssg:string;
  error: {
    email:string,
    password:string
  };
}



@Injectable({
  providedIn: 'root'
})


export class AuthService {
  loginSuccessEvent: EventEmitter<void> = new EventEmitter<void>();

  private apiuUrl:string="http://localhost:8000/api";
  private usertoken=new BehaviorSubject<boolean>(false);

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
            this.loginSuccessEvent.emit();
            this.router.navigate(['/home']); 


        }
      }));
  }
  /*end login function that call api*/


  /*start register function that call api*/
  register( user:{email: string,name: string,mobile:string,street:string, government:string,password: string} ) :Observable<any>{
    //console.log(user);
    return this.httpClient.post<RegisterResponse>(`${this.apiuUrl}/register`,user).pipe(
      tap(response => {
        //console.log(response);
        if(response.status != 400){
          this.storeUserDataInLocalStorage(response.userdata.api_token,response.userdata.role,
            response.userdata.government,response.userdata);
            this.router.navigate(['/home']); 

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

  /*start function taht check if user is logged*/
  isAuthenticated(): boolean {
    const token = localStorage.getItem('api_token');
    return !!token; // Return true if the token is present, false otherwise
  }
  /*end function taht check if user is logged*/


  /*start function that get user role*/
  getUserRole():string {
    const role = localStorage.getItem('role') as string ;
    return role ;
  }
  /*end function that get user role*/

  /*start logout function*/
  logout():Observable<any>{
    return this.httpClient.get<logoutResponse>(`${this.apiuUrl}/logout`,this.httpOptions).pipe(
      tap(response => {
        if(response.status == 200){
          //console.log(response);

          localStorage.clear();
        }
      }));
    // this.router.navigate(['/login']);
  }
  /*end logout function*/

  /*start function call api to send email*/
  sendPasswordResetLink(data:any){
    //console.log(data);
    return this.httpClient.post<passwordResponse>(`${this.apiuUrl}/sendPasswordResetLink`,data);
  }
  /*end function call api to send email*/


    /*start function call api to change password*/
    changePassword(data:any){
      //console.log(data);
      return this.httpClient.post<passwordResponse>(`${this.apiuUrl}/resetPassword`,data);
    }
  /*end function call api to change password*/

}
