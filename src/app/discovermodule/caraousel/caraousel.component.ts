import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.css']
})
export class CaraouselComponent implements OnInit{
  @Input() carouselimages:any[]=[];

  tripsImagePath: string =  'http://127.0.0.1:8000/images/trip_images/thumbnails/';
  hotelsImagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';
  restaurantsImagePath: string = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
  

  ngOnInit(){
    //console.log(this.carouselimages);
  }
}
