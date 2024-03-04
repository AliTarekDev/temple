import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestOffersComponent } from './components/request-offers/request-offers.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VirtualRealityComponent } from './components/virtual-reality/virtual-reality.component';
import { DividerComponent } from './components/divider/divider.component';
import { CitadelComponent } from './components/citadel/citadel.component';
import { ProjectsPartiesComponent } from './components/projects-parties/projects-parties.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    RequestOffersComponent,
    FooterComponent,
    VirtualRealityComponent,
    DividerComponent,
    CitadelComponent,
    ProjectsPartiesComponent,
    DetailsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
