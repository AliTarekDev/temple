import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-virtual-reality-display',
  templateUrl: './virtual-reality-display.component.html',
  styleUrls: ['./virtual-reality-display.component.scss'],
})
export class VirtualRealityDisplayComponent implements OnInit, OnDestroy {
  @ViewChild('secondSection') secondSection!: ElementRef<any>;

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

  @ViewChild('virtualRealitySection') virtualRealitySection!: ElementRef;
  @ViewChild('stickyImg') stickyImg!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const virtualRealitySectionTop =
      this.virtualRealitySection.nativeElement.offsetTop;
    const virtualRealitySectionHeight =
      this.virtualRealitySection.nativeElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Calculate the position when the end of the virtual-reality section is reached
    const endOfVirtualRealitySection =
      virtualRealitySectionTop + virtualRealitySectionHeight - windowHeight;

    // If scrolled to the end of the virtual-reality section, show the sticky image
    if (scrollPosition >= windowHeight - 300) {
      // this.stickyImg.nativeElement.style.display = 'block';
      this.stickyImg.nativeElement.classList.add('show');
    } else {
      this.stickyImg.nativeElement.classList.remove('show');
    }
  }

  ngOnDestroy(): void {
    this._backgroundService.resetBodyBackground();
  }
}
