import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CounterService} from 'src/app/Services/counter.service';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit{
  constructor(private CounterService:CounterService,
    protected authService:AuthService){}
  counter: number = 0;


  ngOnInit(){
    this.CounterService.get_Counter().subscribe((val)=>this.counter=val);

  }

 
  /*
  this.authService.register().subscribe({
    next:(next)=>{

      console.log(next);
    },
    error:(error) => {
      console.error('Error fetching reviews:', error);
    },
    complete:()=>{}
  });
  */
}
