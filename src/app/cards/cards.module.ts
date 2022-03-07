import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardsComponent,
      },
    ]),
    SharedModule,
  ],
  exports: [CardsComponent],
})
export class CardsModule {}
