import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapComponent,
      },
    ]),
    SharedModule,
  ],
  exports: [MapComponent],
})
export class MapModule {}
