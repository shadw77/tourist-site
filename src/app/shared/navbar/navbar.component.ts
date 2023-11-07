import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CounterService } from 'src/app/Services/counter.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  userData: any;
  isSigned: boolean = false;
  counter: number = 0;

  constructor(
    private CounterService: CounterService,
    private router: Router,
    protected authService: AuthService
  ) {
    this.userData = localStorage.getItem('userData');
    this.isSigned = !!this.userData;
  }

  ngOnInit() {
    this.CounterService.get_Counter().subscribe((val)=>this.counter=val);

    this.authService.loginSuccessEvent.subscribe(() => {
      this.userData = localStorage.getItem('userData');
      this.isSigned = !!this.userData;
    });
  }

  

  logOut() {
    this.authService.logout().subscribe(() => {
      localStorage.clear(); 
      this.isSigned = false; 
      console.log('Logged out');
      this.router.navigate(['/login']); 
    });
  }
}

