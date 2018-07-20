import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingRoutingModule } from './account-routing-routing.module';
import { UserInforComponent } from '../user-infor/user-infor.component';
import { OrderManageComponent } from '../order-manage/order-manage.component';
import { AccountComponent } from '../account.component';
import { OrderByIdComponent } from '../order-manage/order-by-id/order-by-id.component';


@NgModule({
  imports: [
      CommonModule,
      AccountRoutingRoutingModule
  ],
  declarations: [
      UserInforComponent,
      OrderManageComponent,
      AccountComponent,
      OrderByIdComponent
  ],

})
export class AccountRoutingModule { }
