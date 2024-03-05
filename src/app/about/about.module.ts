import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutComponent } from './components/about/about.component';
import { AboutUsContentComponent } from './components/about-us-content/about-us-content.component';
import { AboutUsDetailsComponent } from './components/about-us-details/about-us-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutHeaderComponent,
    AboutComponent,
    AboutUsContentComponent,
    AboutUsDetailsComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
