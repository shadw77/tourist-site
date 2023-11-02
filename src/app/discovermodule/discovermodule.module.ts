import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { MediaComponent } from './media/media.component';
import { CuttextPipe } from '../Pipes/cuttext.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbcommentComponent } from './ngbcomment/ngbcomment.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ReviewStarsComponent } from './media/review-stars/review-stars.component';
import { DetailsComponent } from './Details/details.component';

const routes: Routes = [
  
  {path:'',redirectTo:'/discover/home',pathMatch:'full'},
  {path:'home',component:DiscoverComponent},

  {path:':name-details',component:DetailsComponent},
];

@NgModule({
  declarations: [  
    DiscoverComponent, CaraouselComponent, MediaComponent,CuttextPipe, NgbcommentComponent, ReviewStarsComponent, DetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule.forRoot()

  ]
})
export class DiscovermoduleModule { }
