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
  comment:any;
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
    const state = history.state;
    //console.log(state);
    if (state) {
      this.detailsdata = state.data; 
      //console.log(this.detailsdata);
    }
    //this.initAutocomplete();

  } 

  sendReview(){
    
    //console.log(this.userId);

    console.log(this.comment);
    this.handle.storeReview(this.detailsdata,this.comment).subscribe({
      next:(next)=>{
        console.log(next);
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{
      }
    });  
    ;
  }



}