
// @模块装饰器函数导入
import { NgModule } from '@angular/core';

// @路由对象导入
import { RouterModule, Routes } from '@angular/router';

// @登录组件导入
import { LoginComponent } from './login/login.component';

// @导入路由守卫模块
import { LoginGuard } from './common/guard/login.guard';

// @路由数组
const appRoutes: Routes = [
        {
            path: '', // @默认路由写在通配路由上面
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'workspace', // @这里对workspace模块实行懒加载处理，那么在其根模块中就不需要进行导入了，同时声明也是不需要的
            loadChildren: './workspace/workspace.module#WorkspaceModule',
            canLoad: [LoginGuard]
        },
        {
            path: '**', // @fallback router must in the last 通配符路由一般写在最后
            component: LoginComponent
        }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true  }) // @路由生效
    ],
    exports: [
        RouterModule
    ]
})

// @导出路由模块
export class AppRoutingModule {}

// @写完路由模块之后，再在根模块中声明


