import { OrderManageComponent } from "./order-manage/order-manage.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AccountComponent } from "./account.component";
import { UserInforComponent } from "./user-infor/user-infor.component";
import { CommonModule } from "@angular/common";

const accountRoutes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        component: UserInforComponent,
                    },
                    {
                        path: 'user-infor',
                        component: UserInforComponent,
                    },
                    {
                        path: 'order-manage',
                        component: OrderManageComponent
                    }
                ]

            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(accountRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }