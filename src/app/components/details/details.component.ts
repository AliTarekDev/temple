import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
declare var bootstrap: any; // Add this line if bootstrap is not recognized

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}
  slides: string[] = [
    './assets/images/header1.png',
    './assets/images/header3.png',
    './assets/images/header2.png',
  ];
  @ViewChild('carousel') carousel: any;

  ngOnInit(): void {
    this.adjustImagePositions();
  }

  overlayImages = [
    {
      src: './assets/images/show-pyramids.png',
      alt: 'Overlay 1',
      top: '20%',
      right: '-12%',
      left: 'auto',
      width: '40%',
      height: 'auto',
      svgAfterImage: true,
      title: 'عرض الاهرامات',
      content: 'الاهرامات',
      hideLine: false,
    },

    {
      src: './assets/images/karnk.png',
      alt: 'Overlay 1',
      top: '30%',
      right: 'auto',
      left: '-12%',
      width: '40%',
      height: 'auto',
      svgAfterImage: false,
    },

    {
      src: './assets/images/edfo.png',
      alt: 'Overlay 1',
      top: '40%',
      right: '-12%',
      left: 'auto',
      width: '40%',
      height: 'auto',
      svgAfterImage: true,
    },

    {
      src: './assets/images/elephant.png',
      alt: 'Overlay 1',
      top: '50%',
      right: 'auto',
      left: '-12%',
      width: '40%',
      height: 'auto',
      svgAfterImage: false,
    },
    {
      src: './assets/images/abo-sembel.png',
      alt: 'Overlay 1',
      top: '60%',
      right: '-12%',
      left: 'auto',
      width: '40%',
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

    if (width <= 1440) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-70px',
        right: image.right == 'auto' ? 'auto' : '-70px',
        width: '50%',
      }));
    } else {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-12%',
        right: image.right == 'auto' ? 'auto' : '-12%',
      }));
    }

    if (width <= 1399) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-112px',
        right: image.right == 'auto' ? 'auto' : '-112px',
        width: '40%',
      }));
    }
    if (width < 1200) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-168px',
        right: image.right == 'auto' ? 'auto' : '-168px',
        width: '35%',
      }));
    }
    if (width < 992) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-225px',
        right: image.right == 'auto' ? 'auto' : '-225px',
        width: '25%',
      }));
    }
    if (width < 767) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-280px',
        right: image.right == 'auto' ? 'auto' : '-280px',
        width: '20%',
      }));
    }
    if (width < 536) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-270px',
        right: image.right == 'auto' ? 'auto' : '-270px',
        width: '20%',
      }));
    }
    if (width < 520) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-245px',
        right: image.right == 'auto' ? 'auto' : '-245px',
        width: '20%',
      }));
    }
    if (width < 465) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-220px',
        right: image.right == 'auto' ? 'auto' : '-220px',
        width: '20%',
      }));
    }
    if (width <= 432) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-45px',
        right: image.right == 'auto' ? 'auto' : '-45px',
        width: '40%',
      }));
    }
    if (width <= 335) {
      this.overlayImages = this.overlayImages.map((image) => ({
        ...image,
        left: image.left == 'auto' ? 'auto' : '-25px',
        right: image.right == 'auto' ? 'auto' : '-25px',
        width: '40%',
      }));
    }
  }
  private carouselInstance: any;

  ngAfterViewInit(): void {
    // Initialize the Bootstrap carousel instance
    this.carouselInstance = new bootstrap.Carousel(this.carousel.nativeElement);
  }

  goToSlide(index: number): void {
    this.carouselInstance.to(index);
  }
}
