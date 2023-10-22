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

const routes: Routes = [
  
  {path:'',redirectTo:'/discover/home',pathMatch:'full'},
  {path:'home',component:DiscoverComponent},
];

@NgModule({
  declarations: [  
    DiscoverComponent, CaraouselComponent, MediaComponent,CuttextPipe, NgbcommentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule.forRoot()

  ]
})
export class DiscovermoduleModule { }
