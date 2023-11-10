import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  addToggle()
  {
    this.status = !this.status;       
  }
  constructor(private http: HttpClient){
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
    this.getCustomNotifications().subscribe((res)=>{
         this.notifications=res;
         console.log(this.notifications);
         this.UnreadNotifications= this.notifications.filter((notification: any) => notification.read === 0);
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
