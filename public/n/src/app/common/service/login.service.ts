import { Injectable } from '@angular/core';

// @HttpHeaders是请求头，HttpParams是url参数
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

// import { UserModel } from '../model/user.model';

// @定义POST请求头
const httpOptions = {

    headers: new HttpHeaders({
        // 'Content-Type':  'application/json', // @显式定义请求体的 MIME 类型
        // 'Authorization': 'my-auth-token' // @令牌
    })

};

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

        return this.http.post(url, body, httpOptions).pipe(
            retry(3), // @retry a failed request up to 3 times
            catchError(this.handleError) // @then handle the error
        );

    }

    // @退出登录
    public logout() {

        this.isLoggedIn = false;

    }

    // @HTTP错误检测函数
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable('@@Something bad happened; please try again later.');
    }


}
