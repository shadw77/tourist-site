import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent {
  imagePath: string = "";
  order: any = {};
  serviceDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private userOrderCrudService: UserOrderCrudService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const orderId = +params['id'];

      this.userOrderCrudService.getOrderDetails(orderId).subscribe((data) => {
        this.order = data.order;
        this.serviceDetails = data.service_details;
        this.ShowPath();
      });
    });

  }
  ShowPath() {
    const service = this.order.service_type;
  
    if (service === 'Hotel') {
      this.imagePath = 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/';
    } else if (service === 'Restaurant') {
      this.imagePath = 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/';
    } else if (service === 'Destination') {
      this.imagePath = 'http://127.0.0.1:8000/images/destination_images/thumbnails/';
    } else if (service === 'Trip') {
      this.imagePath = 'http://127.0.0.1:8000/images/trip_images/thumbnails/';
    } else {
         
    }
  }
  
}