import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../components/divider/divider.component';
import { HowToReachComponent } from './how-to-reach/how-to-reach.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [DividerComponent, HowToReachComponent, CarouselComponent],
  imports: [CommonModule, CarouselModule],
  exports: [
    DividerComponent,
    HowToReachComponent,
    CarouselComponent,
    CarouselModule,
  ],
})
export class SharedModule {}
