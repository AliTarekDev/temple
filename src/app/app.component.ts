import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'temple';
  constructor(private scrollService: ScrollService) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollService.emitScrollYPosition(window.scrollY);
  }
}
