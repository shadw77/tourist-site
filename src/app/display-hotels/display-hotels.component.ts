import { Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import { HotelCrudService } from '../Services/hotel-crud.service';
import { SearchDataService } from '../Services/search-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-hotels',
  templateUrl: './display-hotels.component.html',
  styleUrls: ['./display-hotels.component.css']
})
export class DisplayHotelsComponent {
  Hotels: any = [];
  data : any;
  constructor(private activatedRoute: ActivatedRoute,private route: ActivatedRoute,private hotelCrudService: HotelCrudService, private searchDataService: SearchDataService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params) => {
      this.data = params.get('data');
      
      if (this.data) {
        this.searchDataService.searchHotels(this.data).then((response) => {
          this.Hotels = response;
          console.log('Searched Hotels:', this.Hotels);
        });
      } else {
        this.hotelCrudService.getHotels().subscribe((res) => {
          this.Hotels = res;
          this.Hotels = this.Hotels['data'];
          
          console.log('All Hotels:', this.Hotels['data']);
        });
      }
    });
  }
}
