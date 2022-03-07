import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CardsModule } from '../cards/cards.module';
import { UsersModule } from '../users/users.module';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    SharedModule,
    MapModule,
    UsersModule,
    CardsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
