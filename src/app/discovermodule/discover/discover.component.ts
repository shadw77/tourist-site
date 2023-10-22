import { Component, OnInit } from '@angular/core';
import { HandleapiService } from 'src/app/Services/handleapi.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit{
  near:any;
 
  reviewsplaces:any=[];
  
  getnearbyplaces=[];
  places:any=[];

  constructor(private data:HandleapiService,
            private spinner: NgxSpinnerService){}

  ngOnInit(){

    /*start spinner till data get from services*/
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
    /*end spinner till data get from services*/

    /*start function to get nearby places from services*/
    this.data.getNearbyPlaces().subscribe({
      next:(next)=>{
        this.getnearbyplaces=next.nearbyplaces;
        //console.log(next);
        this.places=[].concat(...Object.values(this.getnearbyplaces));
      },
      error:(error) => {
        console.error('Error fetching products:', error);
      },
      complete:()=>{
      }
    });
    /*end function to get nearby places from services*/

      

    this.near=this.data.getdata();
      //console.log(this.near);

    /*start nearby places*/
    //.places.push(...this.near.Destination[9].hotels)
    //this.places.push(...this.near.Destination[9].restaurants)
    //this.places.push(...this.near.Destination[9].trips);
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
