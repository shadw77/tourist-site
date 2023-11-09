import { Component,Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordidentical } from "src/app/customsvalidations/passwordidentical";
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit{

  private apiUrl:string="http://127.0.0.1:8000/api";
  userlogin!:any;

  governments=['Sharm El Sheikh','Hurghada','Cairo','Ain Sukhna','Mersa Matruh','Alexandria','Marsa Alam',
  'El Alamein','Dahab','Luxor','Aswan'];
  ErrorFromBackend:any;
  successMessage:string='';
  ErrorMessage:string='';
  ErrorNameBackend:any;
  ErrorEmailBackend:any;
  ErrorPasswordBackend:any;
  successsLoginReference:string="";
  errorLoginReference:string="";

  constructor(private modalService: NgbModal,
              private Fb:FormBuilder,
              protected authservice:AuthService,

              ) {} 
    
  ngOnInit(): void {

    /*start initialize signin inputs*/
    this.userlogin=this.Fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.maxLength(9)]],
    });
    /*end initialize signin inputs*/

  }


  /*start login inputs*/
  get loginemail(){
    return this.userlogin.get('email');
  }  
  get loginpassword(){
    return this.userlogin.get('password');
  }
  /*end login inputs*/


  /*start login function*/
  submitUserLogin(userform:any){
    //console.log(userform);
    this.successsLoginReference="";
    this.errorLoginReference="";
    this.ErrorEmailBackend="";
    this.ErrorPasswordBackend="";
    //console.log(userform);
    this.authservice.login(userform.value).subscribe({
      next:(next)=>{
        if(next.status == 400){
          this.ErrorFromBackend=Object.values(next.mssg).flat();
          //console.log(this.ErrorFromBackend);
          var {email,password}=next.mssg;
          this.ErrorEmailBackend=email;
          this.ErrorPasswordBackend=password;
        }
        else if(next.status == 401){
          this.errorLoginReference=next.mssg;

        }
        else{
          this.successsLoginReference=next.mssg;
        }
        //console.log(next);
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{

      }
    });
    
  }
  /*end login function*/


  /*start login with github function*/
  loginWithGithub(){
    window.location.href=`${this.apiUrl}/auth/redirect`;
  }
  /*end login with github function*/

  
  /*start login with github function*/
  loginWithGoogle(){
    window.location.href=`${this.apiUrl}/google/auth/redirect`;
  }
  /*end login with github function*/
  

}
