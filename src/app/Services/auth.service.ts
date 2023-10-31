import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiuUrl:string="http://localhost:8000/api";

  constructor(private httpClient:HttpClient) { }

  login(){}

  register( user:{email: string,name: string, password: string,government:string} ) :Observable<any>{
    //console.log(user);
    return this.httpClient.post<RegisterResponse>(`${this.apiuUrl}/register`,user).pipe(
      tap(response => {
        //console.log(response);
        localStorage.setItem("api_token", response.userdata.api_token);
        localStorage.setItem("role", response.userdata.role);

        localStorage.setItem("userData", JSON.stringify(response));
      }));
  }


  
  isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    return !!token; // Return true if the token is present, false otherwise
  }

  logout(){}
}
