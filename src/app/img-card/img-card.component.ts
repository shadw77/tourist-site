import { Component, Input } from '@angular/core';
import { Destination } from '../interface/destination';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent {
@Input() destination !: Destination;
}
