import { Component, OnInit } from '@angular/core';
import { HandleapiService } from 'src/app/Services/handleapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit{
  government:string|null=localStorage.getItem('government')??null;
  allGovernmets:any;
  getnearbyplaces=[];
  storedPlaces:any=[];

  places:any=[];

  reviewsplaces=[];
  storedComments:any=[];
  comments:any=[];

  gettopattractions=[];
  topplaces:any=[];
  reviewstopplaces=[];
  commentsoftopplaces:any=[];


  getoffers=[];
  offers:any=[];
  reviewsoffers=[];
  commentsofoffers:any=[];


  constructor(private data:HandleapiService,
    private auth:AuthService,
            private spinner: NgxSpinnerService){}

  ngOnInit(){//start ngoninit

      /*start spinner till data get from services*/
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      /*end spinner till data get from services*/

      /*start function that get all governments from services*/
      this.allGovernmets=this.data.getGovernemnt();
      /*end function that get all governments from services*/


      /*start function to get nearby places from services*/
      this.data.getNearbyPlaces().subscribe({
        next:(next)=>{
          this.getnearbyplaces=next.nearbyplaces;
          //console.log(this.getnearbyplaces);
          this.storedPlaces=[].concat(...Object.values(this.getnearbyplaces));
          this.storedPlaces= Array.from(this.storedPlaces);
          this.places=this.storedPlaces;
          //console.log(this.storedPlaces);

          if(this.auth.isAuthenticated()){
            this.places = this.storedPlaces.filter((place:any )=> place.government === this.auth.getUserGovernment());
          }
          //console.log(this.places);

        },
        error:(error) => {
          console.error('Error fetching places:', error);
        },
        complete:()=>{
          //console.log(typeof this.government);
          //console.log( this.government);

          //console.log(this.places);
        }
      });
      /*end function to get nearby places from services*/

      /*start function to get review of nearby places from services*/
      this.data.getReviewNearByPlaces().subscribe({
        next:(next)=>{
          this.reviewsplaces=next.reviews;
          //console.log(this.reviewsplaces);
          this.storedComments=[].concat(...Object.values(this.reviewsplaces));
          this.storedComments = Array.from(this.storedComments);
          this.comments=this.storedComments;
          /*start filter to get comment of places*/
          if(this.auth.isAuthenticated()){
            this.comments = this.storedComments.filter((comment:any )=>{
              return this.places.some((place:any) => {
                if(place.id == comment.reviewable_id && place.type == comment.reviewable_type){
                  return comment;
                }
              });
            });
          }
          /*end filter to get comment of places*/

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
          console.log(this.topplaces);
        }
      });
      /*end function to get top attractions from services*/

      /*start function to get review of top attractions from services*/
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
          console.log(this.commentsoftopplaces);
        }
      });  
      /*end function to get review of top attractions from services*/

      /*start function to get offers from services*/
      this.data.getOffers().subscribe({
        next:(next)=>{
          this.getoffers=next.topAttractions;
          //console.log(next);
          this.offers=[].concat(...Object.values(this.getoffers));
          this.offers = Array.from(this.offers);
        },
        error:(error) => {
          console.error('Error fetching places:', error);
        },
        complete:()=>{
          //console.log(this.offers);
        }
      });
      /*end function to get offers from services*/

      /*start function to get review of offers from services*/
      this.data.getReviewOffers().subscribe({
        next:(next)=>{
          this.reviewsoffers=next.reviews;
          //console.log(this.reviewstopplaces);
          this.commentsofoffers=[].concat(...Object.values(this.reviewsoffers));
          this.commentsofoffers = Array.from(this.commentsofoffers);
        },
        error:(error) => {
          console.error('Error fetching reviews:', error);
        },
        complete:()=>{
          //console.log(this.commentsofoffers);
        }
      });  
      /*end function to get review of offers from services*/




  }//end ngoninit


  /*start function that filter bygovernment*/
  filterPlacesByGovernment(selectedGovernment: any): void {
    //console.log(selectedGovernment.target.value);
    //console.log(this.places);

      //filter places by government 
      this.places = this.storedPlaces.filter((place:any )=> place.government === selectedGovernment.target.value);
      /*start filter to get comment of places*/
        this.comments = this.storedComments.filter((comment:any )=>{
          return this.places.some((place:any) => {
            if(place.id == comment.reviewable_id && place.type == comment.reviewable_type){
              return comment;
            }
          });
        });
      /*end filter to get comment of places*/
    }
   /*end function that filter bygovernment*/

   



   
  /*start testing function*/
  testuserlogged(){
    //console.log(this.auth.isAuthenticated());
  }
  /*end testing function*/

  /*start testing function*/
  testlogout(){
    
    this.auth.logout().subscribe({
      next:(next)=>{
        //console.log(next);
      },
      error:(error) => {
        //console.error('Error fetching places:', error);
      },
      complete:()=>{
      }
    });
  }
  /*end testing function*/


 


}
