import { Component } from '@angular/core';
import { faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faGoogle  } from '@fortawesome/free-brands-svg-icons';
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

}
