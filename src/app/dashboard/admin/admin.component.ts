import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserOrderCrudService } from 'src/app/Services/user-order-crud.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  UnreadNotifications:any=[];
  status = false;
  data : any;
  notifications:any=[];
  notificationPanelOpen: boolean = false;
  admin:string|null=localStorage.getItem('userData');
  adminName:any;
  services:any=[];
  orders:any=[];
  addToggle()
  {
    this.status = !this.status;       
  }
  constructor(private http: HttpClient,private orderCrudService: UserOrderCrudService,){
  //get request from web api
    this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(data => {
      this.data = data;
    
          }, error => console.error(error));
  }
  getCustomNotifications() {
    return this.http.get(`http://localhost:8000/api/notify`);
}
updateCustomNotifications(read:any) {
  return this.http.put(`http://localhost:8000/api/notify`,read);
}
ngOnInit(){

  if (this.admin !== null) {
    this.adminName = JSON.parse(this.admin);
  }

    this.getCustomNotifications().subscribe((res)=>{
         this.notifications=res;
         console.log(this.notifications);
         this.UnreadNotifications= this.notifications.filter((notification: any) => notification.read === 0);
    });
    this.orderCrudService.getServices().subscribe((res:any)=>{
      // this.filterServices=res;
       this.services=res;
        console.log(this.services)
     });
     this.orderCrudService.serviceOrders().subscribe((res)=>{
      this.orders= res;
      console.log(res);
    });
  }
  toggleNotifications() {
    this.notificationPanelOpen = !this.notificationPanelOpen;
    // Mark unread notifications as read when opening the panel
    if (this.notificationPanelOpen) {
      this.notifications.forEach((notification:any) => {
        if (!notification.read) {
            notification.read = true;
            this.updateCustomNotifications(notification).subscribe((res:any)=>{
                     console.log(res);            
                    });
        }
      });
    }
  }

  hasUnreadNotifications() {
    return this.notifications.some((notification:any) => !notification.read);
  }

}
