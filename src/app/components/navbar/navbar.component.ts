import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from 'src/app/services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private scrollSubscription: Subscription = new Subscription();
  private section2Start: number = 0;

  dropdownOpen = false;
  selectedImage: string | null = './assets/images/flags/egypt.png';
  sectionStartObs: any;

  constructor(private eRef: ElementRef, private scrollService: ScrollService) {}
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }
  navbarFixedWidth: boolean = false;
  ngOnInit(): void {
    this.sectionStartObs = this.scrollService.sectionStart$.subscribe(
      (position) => {
        this.section2Start = position;
        console.log(position);
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    // const currentScrollPosition = window.scrollY + navbar.offsetHeight;
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition >= this.section2Start) {
      navbar.classList.add('fixed-navbar');
    } else {
      navbar.classList.remove('fixed-navbar');
    }
  }

  images: any = {
    ar: './assets/images/flags/egypt.png',
    en: './assets/images/flags/british.png',
  };

  selectedLang: string = 'ar';
  selectLanguage(lang: string) {
    this.selectedImage = this.images[lang] || null;
    this.selectedLang = lang;
    this.toggleDropdown();
  }

  ngOnDestroy(): void {
    this.sectionStartObs.unsubscribe();
  }
}
