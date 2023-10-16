import { Component , ViewChild   } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism-site';
  @ViewChild(LoginComponent) LoginComponent?: LoginComponent;//took instance of logincomponent

  handleLogin(){
    //console.log(this.LoginComponent);
    this.LoginComponent?.open();
  }

}
