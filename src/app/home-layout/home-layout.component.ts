import { Component , ViewChild   } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  @ViewChild(LoginComponent) LoginComponent?: LoginComponent;//took instance of logincomponent

  handleLogin(){
    console.log(this.LoginComponent);
    console.log('aaaa');
    this.LoginComponent?.open();
  }
}
