import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KarnkShowComponent } from './components/karnk-show/karnk-show.component';
import { VirtualRealityDisplayComponent } from './components/virtual-reality-display/virtual-reality-display.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'karnak-show',
    component: KarnkShowComponent,
  },
  {
    path: 'virtual-reality',
    component: VirtualRealityDisplayComponent,
  },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
