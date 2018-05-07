import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivateChild, Route, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// @导入路由
import { Router } from '@angular/router';

// @导入登录服务
import { LoginService } from '../service/login.service';

@Injectable()
export class LoginGuard implements CanLoad {

    // @注入登录服务和路由服务
    constructor(private loginService: LoginService, private router: Router) {}

    // @ canActivate
    // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //     // @当前路由名称
    //     let path = next.routeConfig.path;
    //     console.log(path);

    //     return this.checkLogin(path);

    // }

    // // @ CanActivateChild
    // canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     return this.canActivate(next, state);
    // }

    // @ 这是CanLoad 守卫，实现 canLoad 方法
    canLoad(route: Route): boolean {

        // @Route是路由参数，区别于Router
        console.log('@@CanLoad登录路由守卫开始');
        console.log(route);
        const url = `/${route.path}`;

        return this.checkLogin(url);

    }

    // @检测登录
    checkLogin(url: string): boolean {

        console.log('@@检测登录开始');


        if (this.loginService.isLoggedIn) {

            console.log('@@状态已登录');

            // this.router.navigate(['login']);
            return true; // 路由守卫返回true，表示继续导航

        } else {

            console.log('@@状态未登录');

            // @存储准备前往的URL地址
            this.loginService.redirectUrl = url;

            // @路由导航的额外参数携带变量
            const navigationExtras: NavigationExtras = {
                // queryParams: { 'session_id': sessionId },
                // fragment: 'anchor'
            };

            // 导航到登录页面，并携带额外参数
            this.router.navigate(['login'], navigationExtras);

            return true; // @临时测试
            // return false; // 路由守卫返回false，表示中断导航

        }

    }

}

// @路由守卫也是作为服务的一种
// Navigate to the login page with extras
// this.router.navigate(['/login']);
// gotoTwo() {
//     this.router.navigate(['/two', this.data]);
// }

// gotoThree() {
//     this.router.navigate(['/three'], { queryParams: {name: '滕召维', code: '007'} });
// }
