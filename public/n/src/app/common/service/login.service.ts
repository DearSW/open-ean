import { Injectable } from '@angular/core';

// @HttpHeaders是请求头，HttpParams是url参数
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// import { UserModel } from '../model/user.model';

@Injectable()
export class LoginService {

    // @是否登录，默认是没有登录false
    public isLoggedIn = false;

    public redirectUrl: string;

    // @注入HTTP服务
    constructor(private http: HttpClient) {

    }

    // @进行登录
    public login(url: string, account: string, password: string) {

        const body = {

            account: account,
            password: password

        };

        return this.http.post(url, body, {

            headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
            params: new HttpParams().set('id', '3')

        });

    }

    // @退出登录
    public logout() {

        this.isLoggedIn = false;

    }



}
