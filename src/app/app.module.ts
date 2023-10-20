import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModuleCartModule} from 'src/app/module-cart/module-cart.module';
// import { RatingComponent } from './rating/rating.component';
// import { SubtextPipe } from './pipes/subtext.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    // RatingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ModuleCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
