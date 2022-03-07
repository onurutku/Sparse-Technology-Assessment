import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full',
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: '**',
    redirectTo: '/map',
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
})
export class AppRoutingModule {}
