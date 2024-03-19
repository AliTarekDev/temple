import { Component, Input, Output, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() title: string = '';
  @Input() carouselItems: any = [];
  activeIndex: number = 0;

  // carouselData: any = [
  //   {
  //     date: 'الخميس',
  //     items: [
  //       {
  //         time: '6:00',
  //         lang: 'الانجليزية',
  //       },
  //       {
  //         time: '7:00',
  //         lang: 'الاسبانية',
  //       },
  //     ],
  //   },
  //   {
  //     date: 'الجمعة',
  //     items: [
  //       {
  //         time: '6:00',
  //         lang: 'الانجليزية',
  //       },
  //       {
  //         time: '7:00',
  //         lang: 'الاسبانية',
  //       },
  //     ],
  //   },
  //   {
  //     date: 'السبت',
  //     items: [
  //       {
  //         time: '6:00',
  //         lang: 'الانجليزية',
  //       },
  //       {
  //         time: '7:00',
  //         lang: 'الاسبانية',
  //       },
  //     ],
  //   },
  //   {
  //     date: 'الأحد',
  //     items: [
  //       {
  //         time: '6:00',
  //         lang: 'الانجليزية',
  //       },
  //       {
  //         time: '7:00',
  //         lang: 'الاسبانية',
  //       },
  //     ],
  //   },
  //   {
  //     date: 'الاتنين',
  //     items: [
  //       {
  //         time: '6:00',
  //         lang: 'الانجليزية',
  //       },
  //       {
  //         time: '7:00',
  //         lang: 'الاسبانية',
  //       },
  //     ],
  //   },
  // ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    margin: 10,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  isActive(e: any) {
    this.activeIndex = e.startPosition;
  }
  // getCurrentCenterIndex(): number {
  //   // This method assumes you have 'items' set to an odd number
  //   // and 'center' is true, adjust as necessary for your configuration
  //   const currentIndex = this.owlCarousel.current();
  //   const itemCount = this.carouselData.length;
  //   this.activeIndex = currentIndex % itemCount;

  //   return this.activeIndex;
  // }

  // carouselDataListItems(carouselItems: any) {
  //   console.log(carouselItems, 'items');

  //   this.carouselData = carouselItems;
  // }
}
