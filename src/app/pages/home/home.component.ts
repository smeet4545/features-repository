import { Component } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  swiper_images = [
    './assets/image/apicon-website-slider-2.webp',
    '/assets/image/apicon-website-slider-3.webp',
    '/assets/image/apicon-website-slider-4.webp',
    '/assets/image/apicon-website-slider-5.webp',
    // '/assets/image/top-poster.jpg',
  ];
  public swiper = new Swiper('.swiper-box', {
    autoplay: true,
  });
}
