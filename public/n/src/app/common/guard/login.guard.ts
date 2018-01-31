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

    // @ CanLoad 守卫
    canLoad(route: Route): boolean {

        console.log("CanLoad登录路由守卫：打印参数详情");
        console.log(route);
        let url = `/${route.path}`;

        return this.checkLogin(url);

    }

    // @检测登录
    checkLogin(url: string): boolean {

        if (this.loginService.isLoggedIn) {

            // this.router.navigate(['login']);
            return true;

        } else {

            // @存储准备前往的URL地址
            this.loginService.redirectUrl = url;

            // @路由导航的额外参数携带变量
            let navigationExtras: NavigationExtras = {
                // queryParams: { 'session_id': sessionId },
                // fragment: 'anchor'
            };

            // 导航到登录页面，并携带额外参数
            this.router.navigate(['login'], navigationExtras);
            return false;

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
