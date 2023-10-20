import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  imageUrl: string = 'https://vivaegypttravel.com/wp-content/uploads/2023/08/large_6X0A2306.JPG.webp ';
  // title: string = 'WHO WE ARE';
  // description: string = 'We proudly serve as the online platform dedicated to spotlighting the richness of Egyptian tourism.';

  content = {
    title: 'Why Choose Us?',
    description: 'When it comes to exploring exotic places, the options are many. Whether you like peace destinations or vibrant landscapes, we have offers for you.',
    benefits: [
      {
        image: 'https://safer.travel/uploads/whyUs/safe.webp',
        title: 'Best Price Guarantee',
        details: 'At Safir Tourism Company, we intend to provide leading and reliable travel services to our valued customers, and we believe that we offer the best prices for hotel reservations, airline tickets, and other travel trips.',
      },
      {
        image: 'https://safer.travel/uploads/whyUs/timer.webp',
        title: 'Easy and Secure Booking',
        details: 'We guarantee you the best deals and offers available, in addition to providing entry visas, hotel reservations, and arranging transportation. With a technical support team available around the clock, you can rely on our company to help you solve any problems or inquiries you have during your trip.',
      },
      {
        image: 'https://safer.travel/uploads/whyUs/service.webp',
        title: 'Customer Service 24/7',
        details: 'We at Safir Tourism Company guarantee you 24/7 customer service. Our qualified technical support team is always available to help you solve any problem you may encounter and to answer all your questions regarding our services, offers, and reservations.',
      },
    ],
  };
  headingText = 'Explore the world with confidence';
  paragraphText = [
    'We are Travel Tourism, a global travel agency specialized in organizing luxury tourist trips for our valued clients.',
    'We provide our services to individuals and companies alike, as we strive to meet all their tourism needs and desires.',
    'Our team is qualified and specialized in the field of tourism, and has extensive experience in organizing tourist trips and designing luxury tourism programs.',
    'We work closely with our industry partners to provide the best services and offers to our customers.',
    'We strive to provide an unforgettable tourist experience for our customers, as we pay attention to the smallest details and strive to meet all their tourist needs and desires.',
    'We also ensure that our customers will enjoy a luxurious and comfortable tourist trip and we will help them create unforgettable memories.',
  ];
  statisticsData = [
    {
      imageSrc: 'https://safer.travel/website_assets/images/homePage/plane.webp',
      number: '9000+',
      label: 'Packages'
    },
    {
      imageSrc: 'https://safer.travel/website_assets/images/homePage/global.webp',
      number: '40+',
      label: 'Branches All Over'
    },
    {
      imageSrc: 'https://safer.travel/website_assets/images/homePage/man.webp',
      number: '200+',
      label: 'Expert Agents'
    },
    {
      imageSrc: 'https://safer.travel/website_assets/images/homePage/ballon.webp',
      number: '4000+',
      label: 'Activities Listed'
    }
  ];
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
  newsletterForm: FormGroup;
  constructor(private fb: FormBuilder) {
      this. newsletterForm= this.fb.group({
    email: ['', [Validators.required, Validators.email]],
});

  }
  subscribeToNewsletter(){
    console.log(this.newsletterForm);
}
}
