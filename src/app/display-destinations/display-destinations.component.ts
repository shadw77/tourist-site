import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { DestinationCrudService } from '../Services/destination-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-destinations',
  templateUrl: './display-destinations.component.html',
  styleUrls: ['./display-destinations.component.css']
})
export class DisplayDestinationsComponent {
  Destinations: any = [];
  data : any;
  constructor(private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private destinationCrudService: DestinationCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      
      if (this.data) {
        this.searchDataService.searchDestinations(this.data).then((response) => {
          this.Destinations = response;
          console.log('Searched Destinations:', this.Destinations);
        });
      } else {
        
        this.destinationCrudService.getDestinations().subscribe((res) => {
          this.Destinations = res;
          this.Destinations = this.Destinations;
          
          console.log('All Destinations:', this.Destinations);
        });
      }
    });  }
}
