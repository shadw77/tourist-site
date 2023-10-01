import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.css']
})
export class CaraouselComponent implements OnInit{
  @Input() city:any;


  ngOnInit(){
    console.log(this.city);
  }
}
