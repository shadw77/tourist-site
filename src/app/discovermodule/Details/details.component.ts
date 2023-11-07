import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { HandleapiService } from 'src/app/Services/handleapi.service';
//import { google } from '@google/maps';

// declare var google: any;
// declare var $: any;
// declare var customScript: any;
// interface Position {
//   coords: {
//     latitude: number;
//     longitude: number;
//   };
// }


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

  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private handle:HandleapiService) {
      // $(document).ready(function() {
      //   $("#myButton").click(function() {
      //     alert("Button clicked!");
      //   });
     
      // });

     }

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
    //this.initializeMap();
  } 
  /*end ngoninit*/

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



  /*

    private initializeMap() {
      let map: google.maps.Map;
      let markers: google.maps.Marker[] = [];
      const infoWindow = new google.maps.InfoWindow();
      const geocoder = new google.maps.Geocoder();
      const pacInput = document.getElementById('pac-input') as HTMLInputElement;
      const latitudeInput = document.getElementById('latitude') as HTMLInputElement;
      const longitudeInput = document.getElementById('longitude') as HTMLInputElement;
  
      const center = { lat: 24.740691, lng: 46.6528521 };
  
      map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13,
        mapTypeId: 'roadmap'
      });
  
      // Move pin and current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
            const marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: 'موقعك الحالي'
            });
            markers.push(marker);
            marker.addListener('click', () => {
              geocodeLatLng(geocoder, map, infoWindow, marker);
            });
            google.maps.event.trigger(marker, 'click');
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
      }
  
      google.maps.event.addListener(map, 'click', (event: google.maps.MapMouseEvent) => {
        const selectedLatLng = event.latLng;
        geocoder.geocode({ latLng: selectedLatLng }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              deleteMarkers();
              addMarkerRunTime(selectedLatLng);
              const selectedLocation = results[0].formatted_address;
              console.log(results[0].formatted_address);
              splitLatLng(String(selectedLatLng));
              pacInput.value = results[0].formatted_address;
            }
          }
        });
      });
  
      function geocodeLatLng(
        geocoder: google.maps.Geocoder,
        map: google.maps.Map,
        infowindow: google.maps.InfoWindow,
        markerCurrent: google.maps.Marker
      ) {
        const latlng = { lat: markerCurrent.getPosition().lat(), lng: markerCurrent.getPosition().lng() };
        latitudeInput.value = String(markerCurrent.getPosition().lat());
        longitudeInput.value = String(markerCurrent.getPosition().lng());
  
        geocoder.geocode({ location: latlng }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          if (status === 'OK') {
            if (results[0]) {
              map.setZoom(8);
              const marker = new google.maps.Marker({
                position: latlng,
                map: map
              });
              markers.push(marker);
              infowindow.setContent(results[0].formatted_address);
              const selectedLocation = results[0].formatted_address;
              pacInput.value = results[0].formatted_address;
              infowindow.open(map, marker);
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      }
  
      function addMarkerRunTime(location: google.maps.LatLng) {
        const marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
      }
  
      function setMapOnAll(map: google.maps.Map | null) {
        markers.forEach(marker => {
          marker.setMap(map);
        });
      }

      function clearMarkers() {
        setMapOnAll(null);
        markers = [];
      }
  
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }



  // Create the search box and link it to the UI element.
  const input = document.getElementById('pac-input');
  pacInput.value = 'أبحث هنا';
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', () => {
    searchBox.setBounds(map.getBounds());
  });

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(marker => {
      marker.setMap(null);
       });

    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place:any) => {
      if (!place.geometry || !place.geometry.location) {
        console.log('Returned place contains no geometry');
        return;
      }
      const icon = {
        url: place.icon as string,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
  });

  function handleLocationError(browserHasGeolocation: boolean, infoWindow: google.maps.InfoWindow, pos: google.maps.LatLng) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : 'Error: Your browser doesn\'t support geolocation.'
    );
    infoWindow.open(map);
  }

    function splitLatLng(latLng:any){
      //const latitude = document.getElementById('latitude-input');
      //const longitude = document.getElementById('longitude-input');

      
      var newString = latLng.substring(0, latLng.length-1);
      var newString2 = newString.substring(1);
      var trainindIdArray = newString2.split(',');
      var lat = trainindIdArray[0];
      var Lng  = trainindIdArray[1];
      //latitude.value = lat;
      //longitude.value = Lng;

      $("#latitude").val(lat);
      $("#longitude").val(Lng);
  }
  
    }

*/



}//end class