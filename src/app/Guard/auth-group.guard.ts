import { CanActivateChildFn ,CanActivateFn} from '@angular/router';
import { Injectable } from '@angular/core';
import { Component , ViewChild   } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGroupGuard: CanActivateChildFn = 
(childRoute:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = new Router(); // Instantiate the Router
    const token = localStorage.getItem('api_token');
    if(token){
      return true;
    }
    else{//hena lma agy addos 3ls userprofile l mfrood fl header 3amel /user/userprofile/ fl return hena bya5od bas userprofile
      alert('you must login first..');
      router.navigate(['/login'],{
        queryParams:{
          return: state.url
        }
      });
      return false;
    }
};

