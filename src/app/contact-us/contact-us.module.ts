import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';
import { ContactUSHeaderComponent } from './components/contact-usheader/contact-usheader.component';
import { ContactUSFormComponent } from './components/contact-usform/contact-usform.component';
import { SharedModule } from '../shared/shared.module';
import { HowToReachComponent } from './components/how-to-reach/how-to-reach.component';

@NgModule({
  declarations: [
    ContactHomeComponent,
    ContactUSHeaderComponent,
    ContactUSFormComponent,
    HowToReachComponent,
  ],
  imports: [CommonModule, ContactUsRoutingModule, SharedModule],
})
export class ContactUsModule {}
