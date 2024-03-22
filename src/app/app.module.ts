import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestOffersComponent } from './components/request-offers/request-offers.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VirtualRealityComponent } from './components/virtual-reality/virtual-reality.component';
import { CitadelComponent } from './components/citadel/citadel.component';
import { ProjectsPartiesComponent } from './components/projects-parties/projects-parties.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { KarnkShowComponent } from './components/karnk-show/karnk-show.component';
import { KarnakShowContentComponent } from './components/karnak-show-content/karnak-show-content.component';
import { DescriptionVedioComponent } from './components/description-vedio/description-vedio.component';
import { ShowPricesComponent } from './components/show-prices/show-prices.component';
import { CommentsComponent } from './components/comments/comments.component';
import { VirtualRealityDisplayComponent } from './components/virtual-reality-display/virtual-reality-display.component';
import { VirtualRealityContentComponent } from './components/virtual-reality-content/virtual-reality-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    RequestOffersComponent,
    FooterComponent,
    VirtualRealityComponent,
    CitadelComponent,
    ProjectsPartiesComponent,
    DetailsComponent,
    HomeComponent,
    KarnkShowComponent,
    KarnakShowContentComponent,
    DescriptionVedioComponent,
    ShowPricesComponent,
    CommentsComponent,
    VirtualRealityDisplayComponent,
    VirtualRealityContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
