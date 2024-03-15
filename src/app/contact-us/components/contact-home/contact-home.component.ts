import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss'],
})
export class ContactHomeComponent implements OnInit, OnDestroy {
  constructor(
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
