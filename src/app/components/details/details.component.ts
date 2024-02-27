import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  overlayImages = [
    {
      src: './assets/images/show-pyramids.png',
      alt: 'Overlay 1',
      top: '10%',
      right: '20%',
      left: 'auto',
      width: '20%',
      height: 'auto',
    },
    // { src: 'path/to/overlay-image-2.png', alt: 'Overlay 2', top: '30%', left: '50%', width: '15%', height: 'auto' }
    // Add more images as needed
  ];
}
