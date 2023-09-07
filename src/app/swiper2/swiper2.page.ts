import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-swiper2',
  templateUrl: './swiper2.page.html',
  styleUrls: ['./swiper2.page.scss'],
})
export class Swiper2Page implements OnInit {
  

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];
  
  constructor() { }

  ngOnInit() {
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }


  swiperSlideChanged(e: any) {
    console.log('changed:', e);
  }
}
