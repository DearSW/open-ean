
// @导入浏览器模块，说明是浏览器环境
import { BrowserModule } from '@angular/platform-browser';

// @导入动画模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @导入Ng模块声明
import { NgModule } from '@angular/core';

// @导入HttpClient请求模块，ng5推荐
import { HttpClientModule } from '@angular/common/http';

// @导入路由导航
import { Router } from '@angular/router';

// @导入Form构建需要的Module，动态Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @导入ngx-loading-bar插件，在顶部的加载样式
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

// @导入总的路由模块
import { AppRoutingModule } from './app.routes';

// @导入ng-zorro的UI库
import { NgZorroAntdModule } from 'ng-zorro-antd';

 // @根组件(ts)导入，同时 对应 Angular1的根控制器(js)
import { AppComponent } from './app.component';

// @登录组件导入
import { LoginComponent } from './login/login.component';

// @路由守卫导入
import { LoginGuard } from './common/guard/login.guard';

// @登录服务导入
import { LoginService } from './common/service/login.service';

// @模块注解
@NgModule({

    // @组件声明
    declarations: [
        AppComponent,
        LoginComponent
    ],

    // @模块声明
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule.forRoot(),
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarHttpClientModule,
        LoadingBarModule.forRoot(),
        BrowserAnimationsModule
    ],

    // @服务声明
    providers: [
        LoginService,
        LoginGuard,
        LoadingBarService
    ],

    // @根组件启动
    bootstrap: [AppComponent] // @此处对应Angular1的 ng-app 指令
})

// @导出此模块
export class AppModule {

    // @路由审查配置
    constructor(router: Router) {
        console.log('@@路由审查：', JSON.stringify(router.config, undefined, 2));
    }

}
