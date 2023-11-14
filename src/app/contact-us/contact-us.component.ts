import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HandleapiService } from '../Services/handleapi.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {


  imageUrl: string = 'https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_640.jpg';
  title: string = 'CONNECT WITH US';

  content = {
    title: 'Contact Us Through Our Social Channels.',
    benefits: [
      {
        image: 'https://safer.travel/website_assets/images/contact/message.webp',
        title: 'Phone Number',
        details: 'Info@Safer.Travel',
      },
      {
        image: 'https://safer.travel/website_assets/images/contact/call%20center.webp',
        title: 'Our Location',
        details: 'For Individuals:00905521501111- 00905016451111 For Companies:00905016451111 ',
      },
      {
        image: 'https://safer.travel/website_assets/images/contact/location.webp',
        title: 'E-Mail',
        details: ' Sixth Floor, Above Kababji Mahmoud Restaurant - Watan Square - Al-Fatih - Istanbul - Turkey',
      },
    ],
  };
  contactForm: FormGroup;

  constructor(private fb: FormBuilder , private handleapi:HandleapiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  /*start function that call sendmessage from handleapi service*/
  submitForm(form:any) {
    console.log(form.value);
    this.handleapi.sendMessage(form.value).subscribe({
      next:(next)=>{
      //console.log(next);
      },
      error:(error) => {
        console.error('Error fetching reviews:', error);
      },
      complete:()=>{

      }
    });
  }
  /*end function that call sendmessage from handleapi service*/






  reloadCaptcha() {
    console.log('Reloading captcha...');
  };

  mission = {
    title: 'Our mission',
    description: 'Our mission at Safir Tourism is to provide our customers with exceptional travel experiences that exceed their expectations. We strive to provide personalized services tailored to each individual\'s needs and preferences, while maintaining the highest standards of professionalism and integrity. At Safar Tourism, our mission is to turn our customers\' travel dreams into reality, an unforgettable trip every time.',
    image: 'https://safer.travel/website_assets/images/about/objectives/capaign.webp'
  };

  vision = {
    title: 'Our vision',
    description: 'Our vision at Safir Tourism is to become the leading provider of unique and tailored travel experiences that exceed your expectations. We strive to be a trusted advisor to our clients, creating memorable journeys to also reflect their individual preferences and interests. Our goal is to inspire a sense of wonder and discovery in everyone who travels with us, creating lifelong memories that they will cherish forever.',
    image: 'https://safer.travel/website_assets/images/about/objectives/target.webp'
  };



  subscribeToNewsletter(){
    console.log(this.contactForm);
}
}
