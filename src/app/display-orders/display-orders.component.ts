import { Component } from '@angular/core';
import { UserOrderCrudService } from '../Services/user-order-crud.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent {
  Orders: any = [];
  latestOrder:any=[];
  userData:any;
  serviceName: any=[];
  imagePaths:any;
  imagePath:any;
  userName:any;
  ProcessedOrders: any[] = [];

  constructor(private userOrderCrudService: UserOrderCrudService,  private http: HttpClient,
    ){}
  
  ngOnInit():void{

    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
       this.userData = JSON.parse(userDataString);
    }
      const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userData.api_token}`,
    });
    this.userName =this.userData.name;

    this.userOrderCrudService.getAllUserOrders(this.userData.id).subscribe(res => {        
      this.Orders = res;
      this.latestOrder = Object.values(res); // Convert the object values to an array      

      this.latestOrder = this.latestOrder[0].sort((a: any, b: any) => {
        const timestampA = new Date(a.created_at).getTime();
        const timestampB = new Date(b.created_at).getTime();      
        return timestampB - timestampA;
      });
      
      const latestTimestamp = new Date(this.latestOrder[0].created_at).getTime(); // Get the timestamp of the latest order

      this.latestOrder = this.Orders.data.filter((order: any) => {
        const timestamp = new Date(order.created_at).getTime();
        return timestamp === latestTimestamp;
      });
        if (this.latestOrder.length > 0) {
          this.ProcessedOrders.push(this.latestOrder[0]);
            this.Orders.data = this.Orders.data.filter((order: any)=> order !== this.latestOrder[0]);
                this.latestOrder = [];
        }
   
    
      console.log(this.latestOrder);
      console.log(this.Orders.data);
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - latestTimestamp;
      const minutesPassed = timeDifference / (1000 * 60);

      if (minutesPassed >= 30) {
        this.Orders.data.push(...this.ProcessedOrders);
        this.ProcessedOrders = [];
      }
    });
        this.imagePaths=  {
      Hotel: 'http://127.0.0.1:8000/images/Hotel_images/thumbnails/',
      Restaurant: 'http://127.0.0.1:8000/images/Restaurant_images/thumbnails/',
      Trip: 'http://127.0.0.1:8000/images/trip_images/thumbnails/',
      Destination: 'http://127.0.0.1:8000/images/destination_images/thumbnails/'
    };
  for (let i = 0; i < this.Orders.data.length; i++) {
    const currentProductType = this.Orders.data[i].service_type;
    const currentImagePath = this.imagePaths[currentProductType]; 
    this.imagePath = currentImagePath;
  }

  }

  delete(id:any, i:any){
    console.log(id);
    this.userOrderCrudService.deleteUserOrder(id).subscribe(res=>{
      this.Orders.splice(i,1);
  })
    
   
  }

  

}
