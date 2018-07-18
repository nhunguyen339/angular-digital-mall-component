import { OrderManageComponent } from "./order-manage/order-manage.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserInforComponent } from "./user-infor/user-infor.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";


@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule
    ],
    declarations: [
        UserInforComponent,
        OrderManageComponent,
        AccountComponent
    ],

})
export class AccountModule { }