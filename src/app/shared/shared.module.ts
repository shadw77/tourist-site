import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule,
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
