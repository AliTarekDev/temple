import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-request-offers',
  templateUrl: './request-offers.component.html',
  styleUrls: ['./request-offers.component.scss'],
})
export class RequestOffersComponent implements OnInit, OnDestroy {
  constructor(private el: ElementRef, private scrollService: ScrollService) {}

  ngOnInit(): void {
    const position = this.el.nativeElement.offsetTop;
    this.scrollService.setSectionStart(position);
  }

  ngOnDestroy(): void {
    this.scrollService.setSectionStart(0);
  }
}
