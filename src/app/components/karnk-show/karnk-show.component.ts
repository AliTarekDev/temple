import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-karnk-show',
  templateUrl: './karnk-show.component.html',
  styleUrls: ['./karnk-show.component.scss'],
})
export class KarnkShowComponent implements OnInit {
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
  }

  ngOnDestroy(): void {
    this._backgroundService.resetBodyBackground();
  }
}
