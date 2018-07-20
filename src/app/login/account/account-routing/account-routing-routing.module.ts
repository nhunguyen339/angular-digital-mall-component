import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInforComponent } from '../user-infor/user-infor.component';
import { AccountComponent } from '../account.component';
import { OrderManageComponent } from '../order-manage/order-manage.component';
import { AuthGuard } from '../../../models/login-logout/auth.guard';
import { OrderByIdComponent } from '../order-manage/order-by-id/order-by-id.component';

const accountRoutes: Routes = [
    {
        path: '',
        component: AccountComponent, canActivate: [AuthGuard],
        children: [
            {
                path: '', canActivate: [AuthGuard],
                component: UserInforComponent,
            },
            {
                path: 'user-infor', canActivate: [AuthGuard],
                component: UserInforComponent,


            },
            {
                path: 'order-manage',
                children: [
                    { path: ':_id', component: OrderByIdComponent, canActivate: [AuthGuard] },
                    { path: '', component: OrderManageComponent, canActivate: [AuthGuard] }
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
export class AccountRoutingRoutingModule { }
