import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { HandleapiService } from 'src/app/Services/handleapi.service';

//import { google } from 'googlemaps';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  detailsdata:any;
  postedComment:any;
  comment:any;
  userId=localStorage.getItem("userId");
  @ViewChild('mapContainer', { static: false }) mapElement!: ElementRef;

  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];


  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private handle:HandleapiService) {}

  /*start ngoninit*/
  ngOnInit() {
    //console.log(state);
    if (history.state) {
      this.detailsdata = history.state.data; 
      //console.log(this.detailsdata);
    }


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
    this.initMap();

  } 
  /*end ngoninit*/

  /*start function that send comment to service*/
  sendReview(){
    //console.log(this.userId);
    //console.log(this.comment);
    if(this.comment != '' &&  this.comment != undefined){
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
 
  }//end sendreview
  /*end function that send comment to service*/

  
  /*start testing function that test retrieve data under jwt token*/
  calltestapi(){
    this.handle.getTestData(this.postedComment,this.userId).subscribe({
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
  /*end testing function that test retrieve data under jwt token*/



  /*start functions that handle maps*/
  initMap() {
    // Set initial map options
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco, CA)
      zoom: 12
    };

    // Create the map
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  searchAddress(address: string) {
    // Use the Geocoding API to convert the address to coordinates
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results:any, status:any) => {
      if (status === google.maps.GeocoderStatus.OK) {
        // Clear existing markers
        this.clearMarkers();

        // Set the map center to the first result
        this.map.setCenter(results[0].geometry.location);

        // Create a marker for each result
        for (const result of results) {
          this.addMarker(result.geometry.location);
        }
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  }

  addMarker(position: google.maps.LatLng) {
    const marker = new google.maps.Marker({ position, map: this.map });
    this.markers.push(marker);
  }

  clearMarkers() {
    for (const marker of this.markers) {
      marker.setMap(null);
    }
    this.markers = [];
  }
  /*end functions that handle maps*/




}//end class