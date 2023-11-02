import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-stars',
  templateUrl: './review-stars.component.html',
  styleUrls: ['./review-stars.component.css']
})
export class ReviewStarsComponent {
  @Input() rating?: number;
  starRange?: number[];

  ngOnInit() {
    this.starRange = Array.from({ length: 5 }, (_, index) => index + 1);
  }
}
