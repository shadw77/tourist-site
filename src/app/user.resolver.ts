import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserCrudService } from './Services/user-crud.service';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  tokenExpired:any;
  constructor(private userCrudService: UserCrudService) {} 

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const userId = localStorage.getItem('userId');    
    return this.userCrudService.getUser(userId).pipe(
      catchError(error => {
        console.error('Error fetching user data:', error);
        return of(null);
      })
    );
  }

  checkToken(token: any) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp !== undefined) {
        return decodedToken.exp < currentTime;
      } else {
        return false;
      }
    } catch (error) {
      this.tokenExpired = true;

      return true;
    }  }

}
