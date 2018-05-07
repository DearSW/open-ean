
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormGuard } from './form.guard';

import { StepFormComponent } from './step-form/step-form.component';

import { AdvancedFormComponent } from './advanced-form/advanced-form.component';

const formRoutes: Routes = [
    {
        path: '', // @默认路由写在通配路由上面
        redirectTo: 'step-form',
        pathMatch: 'full'
    },
    {
        path: 'step-form',
        component: StepFormComponent,
        canActivate: [FormGuard]
    },
    {
        path: 'advanced-form', // @这里对workspace模块实行懒加载处理，那么在其根模块中就不需要进行导入了，同时声明也是不需要的
        component: AdvancedFormComponent,
        canActivate: [FormGuard]
    },
    {
        path: '**', // @fallback router must in the last 通配符路由一般写在最后
        component: StepFormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(formRoutes)
    ],
    providers: [
        FormGuard  // @路由守卫是作为服务来声明的
    ],
    exports: [
        RouterModule
    ]
})

export class FormRoutingModule {}
// @写完路由模块，记得在主模块中声明
