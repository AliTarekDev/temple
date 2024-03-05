import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-details',
  templateUrl: './about-us-details.component.html',
  styleUrls: ['./about-us-details.component.scss'],
})
export class AboutUsDetailsComponent {
  // This property will track which item's text should be shown
  public showTextIndex: number | null = 0;

  toggleText(e: any, index: number): void {
    debugger;
    console.log('toggle');

    if (e.target.classList.contains('details-title')) {
      // Toggle visibility: if the clicked index is already shown, hide it, otherwise show it
      this.showTextIndex = this.showTextIndex === index ? null : index;
    }
  }
}
