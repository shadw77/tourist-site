import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes  } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { SubtextPipe } from '../Pipes/subtext.pipe'
import {RatingComponent} from '../rating/rating.component'
// import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
  { path: 'carts', component: ListCardsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    CartComponent,
    ListCardsComponent,
    SubtextPipe,
    RatingComponent
  ],
  imports: [
        CommonModule,
        RouterModule.forChild(routes),
  ],
exports:[ListCardsComponent,CartComponent]
  
})
export class ModuleCartModule { }
