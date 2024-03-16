import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../components/divider/divider.component';
import { HowToReachComponent } from './how-to-reach/how-to-reach.component';

@NgModule({
  declarations: [DividerComponent, HowToReachComponent],
  imports: [CommonModule],
  exports: [DividerComponent, HowToReachComponent],
})
export class SharedModule {}
