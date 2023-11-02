import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Component , ViewChild   } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class adminguard{

  constructor(private userauth:AuthService,private router:Router) { }
  canActivate(state: RouterStateSnapshot) {
    if(this.userauth.getUserRole() == "admin"){
      return true;
    }
    else{
      alert('You Dont Have Permission Here..');
      /*this.router.navigate(['/login'],{
        queryParams:{
          return: state.url
        }
      });*/
      
      return false;
    }
  }
}
