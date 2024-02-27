import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  dropdownOpen = false;
  selectedImage: string | null = './assets/images/flags/egypt.png';

  constructor(private eRef: ElementRef) {}
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  ngOnInit(): void {}

  images: any = {
    ar: './assets/images/flags/egypt.png',
    en: './assets/images/flags/british.png',
  };

  selectedLang: string = 'ar';
  selectLanguage(lang: string) {
    this.selectedImage = this.images[lang] || null;
    this.selectedLang = lang;
    this.toggleDropdown(); // Optionally close the dropdown
  }
}
