import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchDataService } from '../Services/search-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
// export class MainSearchComponent {
//   faSearch = faSearch;
//   searchWord: any;
//   data: any;

//   constructor(private http: HttpClient, private searchDataService: SearchDataService) { }

//
    

//   }

//   search() {
//     // Send the searchWord to the backend
//     this.http.post('https://localhost:8000/api/search', { keyword: this.searchWord })
//       .subscribe(response => {
//         // Handle the response from the backend
//         console.log(response);
//       });
//   }

// }

export class MainSearchComponent {
  faSearch = faSearch;
  searchWord: any;
  data: any;
  selectedNavItem: any; 

  constructor(private http: HttpClient, private searchDataService: SearchDataService) { }
  setSelectedItem(navItem: string) {
    this.selectedNavItem = navItem;
    console.log(this.selectedNavItem);
    
  }

  search() {    
    console.log("hiiiiiiiiii", this.selectedNavItem);

    const keyword = this.searchWord;
    let searchService: Observable<any>;

    
    // Determine the appropriate search service based on the selected navigation item
    switch (this.selectedNavItem) {
      
      case 'destinations':
        searchService = this.searchDataService.searchDestinations(keyword);
        break;
      case 'trips':

        const search = this.searchDataService.searchTrips(keyword).then(response=>{
          this.data = response;
          console.log('dodoo',this.data);
        
        });
      
        break;
      case 'restaurants':
        searchService = this.searchDataService.searchRestaurants(keyword);
        break;
      case 'hotels':
        searchService = this.searchDataService.searchHotels(keyword);
        break;
      default:      
      console.log("kkkkkkkkkk",keyword);

        // searchService = this.searchDataService.searchAll(keyword);
        break;
    }

    // searchService.subscribe(data => {
    //   this.data = data;
    //   console.log(this.data);
    // });
  }



  getProductSearch(event: any, name:any){
    this.searchWord = event.target.value;
    this.selectedNavItem = name;

        // const keyword = name.target.value;
        // const search = this.searchDataService.getSearchServiceName(keyword).then(response=>{
        //   this.data = response;
        //   console.log(this.data);
          
        // });
      }
}