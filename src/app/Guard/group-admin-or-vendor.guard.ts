import { CanActivateChildFn } from '@angular/router';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export const groupAdminOrVendorGuard: CanActivateChildFn = 
(childRoute:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = new Router(); // Instantiate the Router
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('api_token');

  if (token && (role == "admin" || role == "vendor" )) {
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
};
