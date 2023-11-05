import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detailsdata:any;

  
  constructor(private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      this.detailsdata= params;
      console.log(this.detailsdata);
    });
  } 
  /*
  npm install @types/googlemaps --save-dev

  @ViewChild('mapElement', { static: false }) mapElement: ElementRef;
  map: google.maps.Map;



     ngAfterViewInit() {
      this.initializeMap();
    }
    
    
  
    initializeMap() {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }
  
    showAddressOnMap(address: string) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          this.map.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

  }*/
  
}

