import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
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
  tripsImagePath: string =  'http://127.0.0.1:8000/images/trip_images/thumbnails/';
  hotelsImagePath: string = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';
  restaurantsImagePath: string = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
  destinationsImagePath: string = 'http://127.0.0.1:8000/images/destination_images/thumbnails/';

  tripsPath: string =  'http://127.0.0.1:8000/images/trip_images/images/';
  hotelsPath: string = 'http://127.0.0.1:8000/images/Hotel_images/images/';
  restaurantsPath: string = 'http://127.0.0.1:8000/images/Restaurant_images/images/';
  destinationsPath: string = 'http://127.0.0.1:8000/images/destination_images/images/';

  isDestination:boolean= false;
  userId=localStorage.getItem("userId");
  thumb: any;

  /*
  @ViewChild('mapContainer', { static: false }) mapElement!: ElementRef;
  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
*/

  userRating:any;
  constructor(private router: Router,
    private auth:AuthService,
    private route: ActivatedRoute,
    private handle:HandleapiService) {}



  /*start ngoninit*/
  ngOnInit() {
    //console.log(state);
    if (history.state) {
      this.detailsdata = history.state.data; 
      this.thumb = this.detailsdata.thumbnail;
      if(this.detailsdata.images[0].imageable_type == 'Destination'){
        this.isDestination = true;
      }
      console.log('des',this.isDestination);
      
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
    // this.initMap();

  } 
  /*end ngoninit*/
  onRatingChange(rating: any) {    
    this.userRating = Number(rating);
  }



  /*start function that send comment to service*/
  sendReview(){
    if(!this.auth.isAuthenticated()){
      alert("First,You Should Login");
    }
    else{
    //console.log(this.userId);
    //console.log(this.comment);
    if(this.comment != '' &&  this.comment != undefined){
      this.handle.storeReview(this.detailsdata,this.comment,this.userId).subscribe({
        next:(next)=>{
          console.log(next);
          if(next.status == 200){
            this.comment="";
            this.postedComment.push(next.reviews);
          }
          else if(next.status == 401){
            alert("You Must Sign In First")
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
    // const mapOptions: google.maps.MapOptions = {
    //   center: { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco, CA)
    //   zoom: 12
    // };

    // Create the map
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  searchAddress(address: string) {
    // Use the Geocoding API to convert the address to coordinates
    // const geocoder = new google.maps.Geocoder();
    // geocoder.geocode({ address }, (results:any, status:any) => {
    //   if (status === google.maps.GeocoderStatus.OK) {
    //     // Clear existing markers
    //     this.clearMarkers();

    //     // Set the map center to the first result
    //     this.map.setCenter(results[0].geometry.location);

    //     // Create a marker for each result
    //     // for (const result of results) {
    //     //   this.addMarker(result.geometry.location);
    //     // }
    //   } else {
    //     console.error('Geocode was not successful for the following reason:', status);
    //   }
    // });
  }


  // addMarker(position: google.maps.LatLng) {
  //   const marker = new google.maps.Marker({ position, map: this.map });
  //   this.markers.push(marker);
  // }


  clearMarkers() {
    // for (const marker of this.markers) {
    //   marker.setMap(null);
    // }
    // this.markers = [];
  }
  /*end functions that handle maps*/





}//end class