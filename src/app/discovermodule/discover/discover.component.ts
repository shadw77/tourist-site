import { Component, OnInit } from '@angular/core';
import { HandleapiService } from 'src/app/Services/handleapi.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit{
 
  reviewsplaces=[];
  comments:any=[];

  getnearbyplaces=[];
  places:any=[];

  constructor(private data:HandleapiService,
            private spinner: NgxSpinnerService){}

  ngOnInit(){

    /*start spinner till data get from services*/
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
    /*end spinner till data get from services*/

    /*start function to get nearby places from services*/
    this.data.getNearbyPlaces().subscribe({
      next:(next)=>{
        this.getnearbyplaces=next.nearbyplaces;
        //console.log(next);
        this.places=[].concat(...Object.values(this.getnearbyplaces));
      },
      error:(error) => {
        console.error('Error fetching places:', error);
      },
      complete:()=>{
      }
    });
    /*end function to get nearby places from services*/

    /*start function to get review of nearby places from services*/
    this.data.getReviewNearByPlaces().subscribe({
      next:(next)=>{
        this.reviewsplaces=next.reviews;
        //console.log(this.reviewsplaces);
        this.comments=[].concat(...Object.values(this.reviewsplaces));
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{
        //console.log(this.comments);
      }
    });

    /*end function to get review of nearby places from services*/
  }


}
