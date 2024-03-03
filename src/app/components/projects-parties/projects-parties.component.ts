import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects-parties',
  templateUrl: './projects-parties.component.html',
  styleUrls: ['./projects-parties.component.scss'],
})
export class ProjectsPartiesComponent {
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
    const widthThreshold = 992;
    this.isLargeScreen = window.innerWidth > widthThreshold;
  }
}
