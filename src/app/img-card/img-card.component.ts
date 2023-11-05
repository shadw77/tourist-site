import { Component, Input } from '@angular/core';
import { Destination } from '../interface/destination';
import { RatingComponent } from '../rating/rating.component';
@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent {
@Input() destination !: Destination;
imagePath: string = 'http://127.0.0.1:8000/images/destination_images/thumbnails/';
rating:any;
ngOnInit(){
  console.log('hhhhh',this.destination);
  
}
}
