
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class checkLoginGuard implements CanActivate {
  constructor(private userauth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.userauth.isAuthenticated();
    if (isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}