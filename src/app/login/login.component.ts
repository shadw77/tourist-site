import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordidentical } from "src/app/customsvalidations/passwordidentical";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit{
  @ViewChild('content') content: any;//took content reference on ng-template
  closeResult = ''; 
  userlogin!:FormGroup;
  userregister!:FormGroup;
  isUserLogin: boolean = true;

  constructor(private modalService: NgbModal,private Fb:FormBuilder) {} 
  ngOnInit(): void {


    /*start initialize signin inputs*/
    this.userlogin=this.Fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.maxLength(9)]],
    });
    /*end initialize signin inputs*/

    /*start initialize signup inputs*/
    this.userregister=this.Fb.group({
      email:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      password:['',[Validators.required, Validators.maxLength(9)]],
      confirmpassword:['',[Validators.required, Validators.maxLength(9)]],
      city:['',Validators.required],

    },{validators:passwordidentical});
    /*end initialize signup inputs*/

  }


  /*start function that open popup window*/
  open() { 
    //console.log(this.content);
    this.modalService.open(this.content, 
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => { 
      this.closeResult = `Closed with: ${result}`; 
    }, (reason) => { 
      this.closeResult =  
         `Dismissed ${this.getDismissReason(reason)}`; 
    }); 
  } 

  private getDismissReason(reason: any): string { 
    if (reason === ModalDismissReasons.ESC) { 
      return 'by pressing ESC'; 
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) { 
      return 'by clicking on a backdrop'; 
    } else { 
      return `with: ${reason}`; 
    } 
  }
  /*end function that open popup window*/


  /*start function to toggle between signin and signup form*/
  showform(){
    this.isUserLogin = !this.isUserLogin;
    console.log(this.isUserLogin);
  }
  /*end function to toggle between signin and signup form*/


  /*start login inputs*/
  get loginemail(){
    return this.userlogin.get('email');
  }  
  get loginpassword(){
    return this.userlogin.get('password');
  }
  /*end login inputs*/

  /*start register inputs*/
  get registeremail(){
    return this.userregister.get('email');
  }  
  get registername(){
    return this.userregister.get('name');
  }

  get registerpassword(){
    return this.userregister.get('password');
  }
  get registerconfirmpassword(){
    return this.userregister.get('confirmpassword');
  }
  get registercity(){
    return this.userregister.get('city');
  }
  /*end register inputs*/

  submitteddata(userform:any){
    console.log(userform);
  }

}


