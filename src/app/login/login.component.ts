import { Component,Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordidentical } from "src/app/customsvalidations/passwordidentical";
import { AuthService } from '../Services/auth.service';


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

    /*start initialize signup inputs*/
    this.userregister=this.Fb.group({
      email:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      password:['',[Validators.required, Validators.maxLength(9)]],
      confirmpassword:['',[Validators.required, Validators.maxLength(9)]],
      government:['',Validators.required],

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
         this.errorLoginReference="";
         this.successsLoginReference="";
         this.successMessage="";
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
  get registergovernment(){
    return this.userregister.get('government');
  }
  /*end register inputs*/

  /*start register function*/
  submitteddata(userform:any){

    //console.log(userform);
    this.authservice.register(userform.value).subscribe({
      next:(next)=>{
        if(next.status == 400){
          this.ErrorFromBackend=Object.values(next.mssg).flat();
          //console.log(this.ErrorFromBackend);
          var {name,email,password}=next.mssg ;
          this.ErrorNameBackend=name;
          this.ErrorEmailBackend=email;
          this.ErrorPasswordBackend=password;
        }
        else{
          this.successMessage=next.mssg;
        }
        console.log(next);
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{}
    });
    
  }
  /*end register function*/

  /*start login function*/
  submitUserLogin(userform:any){
    this.ErrorMessage="";
    this.successMessage="";
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

}


