import { Component , EventEmitter, Output} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CounterService} from 'src/app/Services/counter.service'
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(private CounterService:CounterService){}
  counter: number = 0;
  ngOnInit(){
    this.CounterService.get_Counter().subscribe((val)=>this.counter=val)
  }
  @Output() loginClicked = new EventEmitter<void>();

  handleLogin() {
    console.log('ssss');
    this.loginClicked.emit();
  }
}
