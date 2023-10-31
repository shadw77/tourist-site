import { Component, OnInit } from '@angular/core';
import { HandleapiService } from 'src/app/Services/handleapi.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit{

  getnearbyplaces=[];
  places:any=[];
  reviewsplaces=[];
  comments:any=[];

  gettopattractions=[];
  topplaces:any=[];
  reviewstopplaces=[];
  commentsoftopplaces:any=[];


  constructor(private data:HandleapiService,
            private spinner: NgxSpinnerService){}

  ngOnInit(){//start ngoninit

      /*start spinner till data get from services*/
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      /*end spinner till data get from services*/

      /*start function to get nearby places from services*/
      this.data.getNearbyPlaces("luxor").subscribe({
        next:(next)=>{
          this.getnearbyplaces=next.nearbyplaces;
          //console.log(next);
          this.places=[].concat(...Object.values(this.getnearbyplaces));
          this.places = Array.from(this.places);
        },
        error:(error) => {
          console.error('Error fetching places:', error);
        },
        complete:()=>{
        }
      });
      /*end function to get nearby places from services*/

      /*start function to get review of nearby places from services*/
      this.data.getReviewNearByPlaces("luxor").subscribe({
        next:(next)=>{
          this.reviewsplaces=next.reviews;
          //console.log(this.reviewsplaces);
          this.comments=[].concat(...Object.values(this.reviewsplaces));
          this.comments = Array.from(this.comments);
        },
        error:(error) => {
          console.error('Error fetching reviews:', error);
        },
        complete:()=>{
          //console.log(this.comments);

        }
      });
      /*end function to get review of nearby places from services*/


      /*start function to get top attractions from services*/
      this.data.getTopAttractions().subscribe({
        next:(next)=>{
          this.gettopattractions=next.topAttractions;
          //console.log(next);
          this.topplaces=[].concat(...Object.values(this.gettopattractions));
          this.topplaces = Array.from(this.topplaces);
        },
        error:(error) => {
          console.error('Error fetching places:', error);
        },
        complete:()=>{
          //console.log(this.topplaces);
        }
      });
      /*end function to get nearby places from services*/

      /*start function to get review of nearby places from services*/
      this.data.getReviewTopAttractions().subscribe({
        next:(next)=>{
          this.reviewstopplaces=next.reviews;
          //console.log(this.reviewstopplaces);
          this.commentsoftopplaces=[].concat(...Object.values(this.reviewstopplaces));
          this.commentsoftopplaces = Array.from(this.commentsoftopplaces);
        },
        error:(error) => {
          console.error('Error fetching reviews:', error);
        },
        complete:()=>{
          //console.log(this.commentsoftopplaces);
        }
      });  
      /*end function to get review of nearby places from services*/

  }//end ngoninit


  calltestapi(){
    this.data.getTestData().subscribe({
      next:(next)=>{
        console.log(next);
      },
      error:(error) => {
        console.error('Error fetching places:', error);
      },
      complete:()=>{
      }
    });
  }
}
