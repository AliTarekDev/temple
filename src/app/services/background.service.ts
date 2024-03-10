import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setBodyBackground(bg: string) {
    this.document.body.style.background = `url(${bg})`;
    this.document.body.style.backgroundSize = '100%'; // Optional: Cover the entire page
    this.document.body.style.backgroundPosition = '100%'; // Optional: Center the background image
  }

  resetBodyBackground() {
    this.document.body.style.background = '';
  }
}
