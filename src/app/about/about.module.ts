import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AboutHeaderComponent, AboutComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
