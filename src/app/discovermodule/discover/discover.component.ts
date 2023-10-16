import { Component, OnInit } from '@angular/core';
import { HandleapiService } from 'src/app/Services/handleapi.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit{
  near:any;
  places:any=[];
  reviewsplaces:any=[];
  
  constructor(private data:HandleapiService){

  }

  ngOnInit(){
    this.near=this.data.getdata();
      //console.log(this.near);

    /*start nearby places*/
    this.places.push(...this.near.Destination[9].hotels)
    this.places.push(...this.near.Destination[9].restaurants)
    this.places.push(...this.near.Destination[9].trips);

    //console.log(this.places);
    this.reviewsplaces.push(...this.near.Destination[9].hotels[0].reviews);
    this.reviewsplaces.push(...this.near.Destination[9].hotels[1].reviews);

    this.reviewsplaces.push(...this.near.Destination[9].restaurants[0].reviews);

    this.reviewsplaces.push(...this.near.Destination[9].restaurants[1].reviews);
    this.reviewsplaces.push(...this.near.Destination[9].trips[0].reviews);

    this.reviewsplaces.push(...this.near.Destination[9].trips[1].reviews);
    //console.log(this.reviewsplaces);

    /*end nearby places*/


  }




}
