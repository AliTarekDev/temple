import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-karnk-show',
  templateUrl: './karnk-show.component.html',
  styleUrls: ['./karnk-show.component.scss'],
})
export class KarnkShowComponent implements OnInit {
  title: string = 'المواعيد';
  // @Output() carouselData: EventEmitter<any> = new EventEmitter();
  carouselDataList: any = [];
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private scrollService: ScrollService,
    private _backgroundService: BackgroundService
  ) {}
  ngOnInit(): void {
    const position = this.el.nativeElement.offsetTop;
    this.scrollService.setSectionStart(600);

    this._backgroundService.setBodyBackground(
      './assets/images/contact/contact-landing.png'
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

  // activeCarouselData(e: any) {
  //   this.carouselData.emit(this.carouselDataList);
  // }
}
