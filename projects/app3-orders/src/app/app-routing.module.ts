import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileType, MfeUtil } from 'projects/utils/src/public-api';

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: '',
    component: await new MfeUtil()
      .loadRemoteFile({
        remoteName: 'home',
        remoteEntry: `http://localhost:4203/remoteHome.js`,
        exposedFile: 'HomeComponent',
        exposeFileType: FileType.Component,
      })
      .then((m: { HomeComponent: any }) => m.HomeComponent),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      new MfeUtil()
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
      import('./order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
