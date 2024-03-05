import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'temple';

  // constructor(
  //   private renderer: Renderer2,
  //   private el: ElementRef,
  //   @Inject(DOCUMENT) private document: Document
  // ) {}

  // ngOnInit() {
  //   this.removeBodyBackgroundImage();
  // }

  // removeBodyBackgroundImage() {
  //   this.renderer.setStyle(this.document.body, 'background-image', 'none');
  //   this.renderer.setStyle(this.document.body, 'background', '#222');
  // }

  // ngOnDestroy() {
  //   this.renderer.setStyle(
  //     this.document.body,
  //     'background-image',
  //     'url("path-to-your-background-image")'
  //   );
  // }
}
