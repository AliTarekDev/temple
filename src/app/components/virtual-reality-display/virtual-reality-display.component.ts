import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-virtual-reality-display',
  templateUrl: './virtual-reality-display.component.html',
  styleUrls: ['./virtual-reality-display.component.scss'],
})
export class VirtualRealityDisplayComponent implements OnInit, OnDestroy {
  carouselDataList: any[] = [];
  constructor(
    private el: ElementRef,
    private scrollService: ScrollService,
    private _backgroundService: BackgroundService
  ) {}

  ngOnInit(): void {
    const position = this.el.nativeElement.offsetTop;
    this.scrollService.setSectionStart(600);

    this._backgroundService.setBodyBackground(
      './assets/images/virtual-reality/body.png'
    );

    this.carouselDataList = [
      {
        date: 'الخميس',
        items: [
          {
            time: '6:00',
            lang: 'الانجليزية',
          },
          {
            time: '7:00',
            lang: 'الاسبانية',
          },
        ],
      },
      {
        date: 'الجمعة',
        items: [
          {
            time: '6:00',
            lang: 'الانجليزية',
          },
          {
            time: '7:00',
            lang: 'الاسبانية',
          },
        ],
      },
      {
        date: 'السبت',
        items: [
          {
            time: '6:00',
            lang: 'الانجليزية',
          },
          {
            time: '7:00',
            lang: 'الاسبانية',
          },
        ],
      },
      {
        date: 'الأحد',
        items: [
          {
            time: '6:00',
            lang: 'الانجليزية',
          },
          {
            time: '7:00',
            lang: 'الاسبانية',
          },
        ],
      },
      {
        date: 'الاتنين',
        items: [
          {
            time: '6:00',
            lang: 'الانجليزية',
          },
          {
            time: '7:00',
            lang: 'الاسبانية',
          },
        ],
      },
    ];
  }
  ngOnDestroy(): void {
    this._backgroundService.resetBodyBackground();
  }
}
