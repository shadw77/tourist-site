import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CounterService } from 'src/app/Services/counter.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  userData: any;
  isSigned: boolean = false;
  counter: number = 0;
  tokenExpired: any=false;

  constructor(
    private CounterService: CounterService,
    private router: Router,
    private route: ActivatedRoute,
    protected authService: AuthService
  ) {
    this.tokenExpired=false;
    this.userData = localStorage.getItem('userData');
    this.isSigned = !!this.userData;

    try {
      const decodedToken = jwtDecode(this.userData.api_token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp !== undefined) {
          console.log('');  
      } 
    } catch (error) {
      this.tokenExpired = true;
    }

    if (this.tokenExpired) {
      this.isSigned = false;      
      this.tokenExpired=false;

      // this.router.navigate(['/login']);

    }
  }

  ngOnInit() {
    this.CounterService.get_Counter().subscribe((val) => (this.counter = val));
    if (this.counter < 0) {
      this.counter = 0;
    }

    this.authService.loginSuccessEvent.subscribe(() => {
      this.userData = localStorage.getItem('userData');
      this.isSigned = !!this.userData;
    });

    this.route.data.subscribe((data) => {
      const userDataFromResolver = data['userData'];
      console.log('Resolved data:', userDataFromResolver);
    });

    this.initIsSigned();
  }

  initIsSigned() {
    this.userData = localStorage.getItem('userData');
    this.isSigned = !!this.userData;

    if (this.userData) {
      if (!this.checkToken(this.userData.api_token)) {
        this.isSigned = false;
        
        this.router.navigate(['/login']);

      }
    }  
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      localStorage.clear();
      this.isSigned = false;
      console.log('Logged out');
      this.router.navigate(['/login']);
    });
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











