import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FileType } from 'projects/utils/src/public-api';
import { mfe } from '../../app-routing.module';

@Component({
  selector: 'pmo-mfe-order-component',
  templateUrl: './mfe-order-component.component.html',
  styleUrls: ['./mfe-order-component.component.less'],
})
export class MfeOrderComponentComponent implements OnInit {
  constructor(private viewCRef: ViewContainerRef) {}

  async ngOnInit() {
    const OrderComponent = await mfe
      .loadRemoteFile({
        remoteName: 'orders',
        remoteEntry: `http://localhost:4205/remoteOrders.js`,
        exposedFile: 'OrderComponent',
        exposeFileType: FileType.Component,
      })
      .then((m: { OrderComponent: any }) => m.OrderComponent);

    this.viewCRef.createComponent(OrderComponent);
  }
}
