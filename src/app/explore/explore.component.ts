import { AfterViewInit, Component, Input } from '@angular/core';
import datajson from '../../assets/tables.json';
import Swiper from 'swiper';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements AfterViewInit {
  @Input() data : any;

  ngOnInit():void{
    this.data = datajson;
  }
  
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }


  

}
