
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormGroup, FormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSearchComponent } from './main-search/main-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopDestinationComponent } from './top-destination/top-destination.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { DescCardComponent } from './desc-card/desc-card.component';
import { ItemComponent } from './item/item.component';
import { DisplayRestaurantComponent } from './display-restaurant/display-restaurant.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { AboutUsComponent } from './about-us/about-us.component';
import{ ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ModuleCartModule} from 'src/app/module-cart/module-cart.module';
import { DashboardModule } from "./dashboard/dashboard.module";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [AppComponent, MainSearchComponent, TopDestinationComponent, ImgCardComponent, HomeComponent, ExploreComponent, DescCardComponent, ItemComponent, DisplayRestaurantComponent, DisplayHotelsComponent  ,  AboutUsComponent,
    ContactUsComponent,
    HomeLayoutComponent,
    DashboardLayoutComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ModuleCartModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
