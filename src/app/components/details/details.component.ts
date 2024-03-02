import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
declare var bootstrap: any; // Add this line if bootstrap is not recognized

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.adjustImagePositions();
  }

  overlayImages = [
    {
      src: './assets/images/show-pyramids.png',
      alt: 'Overlay 1',
      top: '20%',
      right: '-5%',
      left: 'auto',
      width: '20%',
      height: 'auto',
      svgAfterImage: true,
      title: 'عرض الاهرامات',
      content: 'الاهرامات',
    },

    {
      src: './assets/images/karnk.png',
      alt: 'Overlay 1',
      top: '30%',
      right: 'auto',
      left: '-5%',
      width: '20%',
      height: 'auto',
      svgAfterImage: false,
    },

    {
      src: './assets/images/edfo.png',
      alt: 'Overlay 1',
      top: '40%',
      right: '-5%',
      left: 'auto',
      width: '20%',
      height: 'auto',
      svgAfterImage: true,
    },

    {
      src: './assets/images/elephant.png',
      alt: 'Overlay 1',
      top: '50%',
      right: 'auto',
      left: '-5%',
      width: '20%',
      height: 'auto',
      svgAfterImage: false,
    },
    {
      src: './assets/images/abo-sembel.png',
      alt: 'Overlay 1',
      top: '60%',
      right: '-5%',
      left: 'auto',
      width: '20%',
      height: 'auto',
      svgAfterImage: true,
    },
    // { src: 'path/to/overlay-image-2.png', alt: 'Overlay 2', top: '30%', left: '50%', width: '15%', height: 'auto' }
    // Add more images as needed
  ];

  modelData = {};

  openModal(image: any): void {
    // Example of setting the modal content dynamically

    this.modelData = { ...image };

    const modalBody = document.querySelector(
      '#imageModal .modal-body'
    ) as HTMLElement;

    const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustImagePositions();
  }
  adjustImagePositions() {
    const width = window.innerWidth;
    if (width <= 767) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-12%',
        right: image.right == 'auto' ? 'auto' : '-12%',
      }));
    } else {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-5%',
        right: image.right == 'auto' ? 'auto' : '-5%',
      }));
    }

    if (width <= 690) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '0',
        right: image.right == 'auto' ? 'auto' : '0',
      }));
    }
  }
}
