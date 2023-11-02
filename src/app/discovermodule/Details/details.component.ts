import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  details:any;
  detailsdata:any;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      console.log(data);

      this.detailsdata = data;
      console.log(this.details);
    });
  }
  
}
