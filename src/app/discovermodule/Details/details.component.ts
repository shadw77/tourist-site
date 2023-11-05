import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { HandleapiService } from 'src/app/Services/handleapi.service';


declare var google: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detailsdata:any;
  postedComment:any;
  comment:any;
  userId=localStorage.getItem("userId");


  /*
  latitudeElement?: ElementRef;
  longitudeElement?: ElementRef;
  @ViewChild('latitude', { static: true }) set latitude(element: ElementRef) {
    this.latitudeElement = element;
  }
  @ViewChild('longitude', { static: true }) set longitude(element: ElementRef) {
    this.longitudeElement = element;
  }*/
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private handle:HandleapiService) { }


  ngOnInit() {
    //console.log(state);
    if (history.state) {
      this.detailsdata = history.state.data; 
      //console.log(this.detailsdata);
    }
    //this.initAutocomplete();

    this.handle.getReviewById(this.detailsdata).subscribe({
      next:(next)=>{
        //console.log(next);
        if(next.status == 200){
          //console.log(next);
          this.postedComment=next.reviews;
         // console.log(this.postedComment);
          //console.log(typeof this.postedComment);
        }
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{
      }
    }); 


  } 

  sendReview(){
    //console.log(this.userId);
    //console.log(this.comment);
    this.handle.storeReview(this.detailsdata,this.comment,this.userId).subscribe({
      next:(next)=>{
        //console.log(next);
        if(next.status == 200){
          this.comment="";
          this.postedComment.push(next.reviews);
        }
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{
      }
    });  
  }



}