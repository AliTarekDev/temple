import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-citadel',
  templateUrl: './citadel.component.html',
  styleUrls: ['./citadel.component.scss'],
})
export class CitadelComponent {
  isLargeScreen: boolean = false;
  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    // Define your specific page width threshold here
    const widthThreshold = 928;
    this.isLargeScreen = window.innerWidth > widthThreshold;
  }
}
