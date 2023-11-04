import { Component,Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordidentical } from "src/app/customsvalidations/passwordidentical";
import { AuthService } from '../Services/auth.service';
import { HandleapiService } from '../Services/handleapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  userregister!:FormGroup;
  governments:any;
  ErrorFromBackend:any;
  successMessage:string='';
  ErrorMessage:string='';
  ErrorNameBackend:any;
  ErrorEmailBackend:any;
  ErrorPasswordBackend:any;
  ErrorMobileBackend:any;
  ErrorstreetBackend:any;

  constructor(private formBuilder: FormBuilder,
    private modalService: NgbModal,
              private Fb:FormBuilder,
              protected authservice:AuthService,
              private data:HandleapiService
              ) {} 
    
  ngOnInit(): void {
   
    /*start initialize signup inputs*/
    this.userregister=this.Fb.group({
      email:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      mobile:['',[Validators.required, Validators.maxLength(11)]],
      street:['',[Validators.required, Validators.maxLength(15)]],
      government:['',Validators.required],
      password:['',[Validators.required, Validators.maxLength(9)]],
      confirmpassword:['',[Validators.required, Validators.maxLength(9)]],

    },{validators:passwordidentical});
    /*end initialize signup inputs*/

    /*start that get governments from services*/
    this.governments=this.data.getGovernemnt();
    /*end that get governments from services*/

  }


  /*start register inputs*/
  get registeremail(){
    return this.userregister.get('email');
  }  
  get registername(){
    return this.userregister.get('name');
  }

  get registermobile(){
    return this.userregister.get('mobile');
  }

  get registerstreet(){
    return this.userregister.get('street');
  }
  get registergovernment(){
    return this.userregister.get('government');
  }

  get registerpassword(){
    return this.userregister.get('password');
  }
  get registerconfirmpassword(){
    return this.userregister.get('confirmpassword');
  }

  /*end register inputs*/

  /*start register function*/
  submitteddata(userform:any){
    this.successMessage="";
    this.ErrorNameBackend="";
    this.ErrorEmailBackend="";
    this.ErrorPasswordBackend="";
    this.ErrorMobileBackend="";
    this.ErrorstreetBackend="";
    //console.log(userform);
    this.authservice.register(userform.value).subscribe({
      next:(next)=>{
        if(next.status == 400){
          this.ErrorFromBackend=Object.values(next.mssg).flat();
          //console.log(this.ErrorFromBackend);
          //console.log(next.mssg);
          var {name,email,mobile,password,street}=next.mssg ;
          this.ErrorNameBackend=name;
          this.ErrorEmailBackend=email;
          this.ErrorPasswordBackend=password;
          this.ErrorMobileBackend=mobile;
          this.ErrorstreetBackend=street;
        }
        else{
          this.successMessage=next.mssg;
        }
        //console.log(next);
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{}
    });
    
  }
  /*end register function*/


  /*end login function*/
}
