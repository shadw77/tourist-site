import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchDataService } from '../Services/search-data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
 

export class MainSearchComponent {
  faSearch = faSearch;
  searchWord: any;
  data: any;
  selectedNavItem: any; 
  @Output() keywordChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private http: HttpClient, private searchDataService: SearchDataService) { }
  setSelectedItem(navItem: string) {
    this.selectedNavItem = navItem;
    console.log(this.selectedNavItem);
    
    
  }

  search() {    
    const keyword = this.searchWord;
    this.keywordChanged.emit(keyword);
    let searchService: Observable<any>;

    
    switch (this.selectedNavItem) {
      
      case 'destinations':
        this.searchDataService.searchDestinations(keyword).then(response=>{
          this.data = response;
          console.log('dodoo',this.data);
        
        });
        this.router.navigate(['/destinations', keyword]);
        break;
      case 'trips':

       this.searchDataService.searchTrips(keyword).then(response=>{
          this.data = response;
          console.log('dodoo',this.data);
        
        });
        
        this.router.navigate(['/trips', keyword]);
      
        break;
      case 'restaurants':
        this.searchDataService.searchRestaurants(keyword).then(response=>{
          this.data = response;
          console.log('dodoo',this.data);
        
        });
        this.router.navigate(['/restaurents', keyword]);
        break;
      case 'hotels':
        this.searchDataService.searchHotels(keyword).then(response=>{
          this.data = response;
          console.log('dodoo',this.data);
        
        });
        this.router.navigate(['/hotels', keyword]);
        break;
      default:      
        // console.log(keyword);
        // searchService = this.searchDataService.searchAll(keyword);
        break;
    }

  }



  getProductSearch(event: any, name:any){
    this.searchWord = event.target.value;
    this.selectedNavItem = name;
      }
}