import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { LoginComponent } from '../login/login.component';
import { Component , ViewChild   } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class authGuard{
 // @ViewChild(LoginComponent) LoginComponent?: LoginComponent;//took instance of logincomponent

  constructor(private userauth:AuthService,private router:Router) { }
  canActivate(state: RouterStateSnapshot) {
    if(this.userauth.isAuthenticated()){
      return true;
    }
    else{//hena lma agy addos 3ls userprofile l mfrood fl header 3amel /user/userprofile/ fl return hena bya5od bas userprofile
      alert('you must login first..');
      /*this.router.navigate(['/login'],{
        queryParams:{
          return: state.url
        }
      });*/
      
      /*console.log(this.LoginComponent);
    this.LoginComponent?.open();
      */
      return false;
    }
  }
}
