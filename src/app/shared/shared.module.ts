import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { FormGroup, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,

  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule,
    RouterModule
  ]
})
export class SharedModule { }
