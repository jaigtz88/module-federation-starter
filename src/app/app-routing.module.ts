import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileType, MfeUtil } from 'projects/utils/src/public-api';

export const mef = new MfeUtil();

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      mef
        .loadRemoteFile({
          remoteName: 'restaurant',
          remoteEntry: `http://localhost:4204/remoteRestaurant.js`,
          exposedFile: 'RestaurantModule',
          exposeFileType: FileType.Module,
        })
        .then((m: { RestaurantModule: any }) => m.RestaurantModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      mef
        .loadRemoteFile({
          remoteName: 'orders',
          remoteEntry: `http://localhost:4205/remoteOrders.js`,
          exposedFile: 'OrderModule',
          exposeFileType: FileType.Module,
        })
        .then((m: { OrderModule: any }) => m.OrderModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
