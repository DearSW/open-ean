
// @导入组件声明，初始化类，元素DOM操作
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

// @导入表单验证
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// @导入可观察对象
import { Observable } from 'rxjs/Observable';

// @引入ngx-loading-bar服务
import { LoadingBarService } from '@ngx-loading-bar/core';
import { flyInOut } from '../common/animation/flyInOut';

// @常量貌似放在这里最好
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoadingBarService],
    animations: [
        flyInOut
    ]
})


export class LoginComponent implements OnInit {

    // @注册表单对象
    validateForm: FormGroup;

    // @登录表单对象
    validateForm2: FormGroup;

    color: string;

    // @登录与注册的转化布尔值
    login = false;

    // @验证码的文本状态、计数器、定时器
    verificationTxtCode = false;
    verificationCodeCount = 0;
    verificationCodeTimer: any = null;

    // @条款同意与阅读状态 默认为false
    termIsReaded = false;

    // @视差移动初始化数据
    imgData: any = {
        bg: {
            top: 150,
            left: 354,
            src: '/assets/bg/ean_4.png',
            scale: 0.1,
            z_index: 1,
        },
        // building_2: {
        //     top: 233,
        //     left: 182,
        //     src: '/assets/bg/ean_2.png',
        //     scale: 0.05,
        //     z_index: 2,
        // },
        building_1: {
            top: 179,
            left: 504,
            src: '/assets/bg/ean_1.png',
            scale: 0.03,
            z_index: 3,
        },
        speeder_shadow: {
            top: 221,
            left: 876,
            src: '/assets/bg/ean_3.png',
            scale: 0.01,
            z_index: 4,
        },
        building_3: {
            top: 121,
            left: -22,
            src: '/assets/bg/ean_5.png',
            scale: 0.02,
            z_index: 5,
        },
        // cat_shadow: {
        //     top: 288,
        //     left: 667,
        //     src: '/assets/bg/cat_shadow.png',
        //     scale: 0.02,
        //     z_index: 5,
        // },
    };
    rate_w: any = 0;
    rate_h: any = 0;
    // @背景图片高度和宽度
    field_width: any = 1200;
    field_height: any = 440;

    // @注入服务
    constructor(private loader: LoadingBarService, private fb: FormBuilder, private el: ElementRef, private renderer2: Renderer2) {

    }

    ngOnInit() {

        // @视差动画初始化
        this.init();

        // @头像颜色
        this.color = ColorList[2];

        // @注册表单验证
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required], [this.userNameAsyncValidator]],
            email: ['', [this.emailValidator]],
            // email: ['', [Validators.email]],
            birthDay: ['', [this.birthDayValidator]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: ['', [Validators.required]],
            captcha: ['', [Validators.required]],
            password: ['', [Validators.required]],
            passwordConfirmation: ['', [this.passwordConfirmationValidator]],
            comment: ['', [Validators.required]],
            term: [true]
        });

        // @登录表单验证
        this.validateForm2 = this.fb.group({
            userName2: ['', [Validators.required]],
            password2: ['', [Validators.required]],
            keepAct: [true]
        });

    }

    // @登录与注册切换视图函数
    loginOrRegister() {
        console.log(this.login);
        this.login = !this.login;
        console.log(this.login);
    }

    // @获取验证码
    getCaptcha($event) {

        this.verificationCodeTimer = null;

        this.verificationCodeCount = 15;

        this.verificationTxtCode = true;

        this.verificationCodeTimer = setInterval(() => {

            if (this.verificationCodeCount === 0) {
                clearInterval(this.verificationCodeTimer);
                this.verificationTxtCode = false;
                this.verificationCodeCount = 15;
            } else {
                this.verificationCodeCount --;
            }
        }, 1000);

    }

    // @DOM操作
    setHeight() {
        this.el.nativeElement.querySelector('.btn1').style.height = '300px';
    }
    setWidth() {
        this.renderer2.setStyle(this.el.nativeElement.querySelector('.btn1'), 'width', '200px');
    }

    // @表单提交
    submitForm = ($event, value) => {
        $event.preventDefault();
        for (const key in this.validateForm.controls) {
            if (this.validateForm.controls.hasOwnProperty(key)) {
                this.validateForm.controls[key].markAsDirty();
            }
        }

        console.log(value);
    }

    // @重置表单
    resetForm($event: MouseEvent) {
        $event.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {

            if (this.validateForm.controls.hasOwnProperty(key)) {
                this.validateForm.controls[key].markAsPristine();
            }
        }
    }

    // @用户名验证函数
    validateConfirmPassword() {
        setTimeout(_ => {
            this.validateForm.controls['passwordConfirmation'].updateValueAndValidity();
        }, 0);
    }

    // @用户名的异步验证函数
    userNameAsyncValidator = (control: FormControl): any => {
        return Observable.create(function (observer) {
            setTimeout(() => {
                if (control.value === 'JasonWood') {
                    observer.next({ 'error': true, 'duplicated': true });
                } else {
                    observer.next(null);
                }
                observer.complete();
            }, 1000);
        });
    }

    // @获取注册表单域的控制句柄
    getFormControl(name) {
        return this.validateForm.controls[name];
    }

    // @获取登录表单域的控制句柄
    getFormControl2(name) {
        return this.validateForm2.controls[name];
    }

    // @邮箱验证函数
    emailValidator = (control: FormControl): { [s: string]: boolean } => {
        const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        if (!control.value) {
            console.log('1');
            return { 'required': true };
        } else if (!EMAIL_REGEXP.test(control.value)) {
            console.log('2');
            return { 'error': true, 'email': true };
        }
    }

    // @注册 密码二次验证函数
    passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { 'required': true };
        } else if (control.value !== this.validateForm.controls['password'].value) {
            return { 'confirm': true, 'error': true };
        }
    }

    // @生日验证函数
    birthDayValidator = (control: FormControl): any => {
        if (new Date(control.value) > new Date()) {
            return { 'expired': true, 'error': true };
        }
    }

    change() {

        this.color = ColorList[Math.floor(Math.random() * 4)];
    }

    start() {
        this.loader.start();
    }

    complete() {
        this.loader.complete();
    }

    /************************************************************/


    // @视差移动函数
    init() {
        console.log(this.el.nativeElement);
        console.log(this.el.nativeElement.querySelector('.mycanvas'));

        // @动态设置Canvas画布的大小
        const w = window.innerWidth + 'px';
        const h = window.innerHeight + 'px';

        console.log(w);
        console.log(h);

        // this.el.nativeElement.querySelector('.mycanvas').width = w;
        // this.el.nativeElement.querySelector('.mycanvas').height = h;


        // this.renderer2.setStyle(this.el.nativeElement.querySelector('.mycanvas'),'width', w);
        // this.renderer2.setStyle(this.el.nativeElement.querySelector('.mycanvas'),'height', h);

        this.setRateWH();
        this.placeImg();
        this.attachMouseEvent();
    }

    // @设置偏移量
    setRateWH() {
        const window_width = document.body.clientWidth;
        const window_height = document.body.clientHeight;
        // @偏移的比例 用于计算
        this.rate_w = this.field_width / window_width;
        this.rate_h = this.field_height / window_height;
        console.log(this.rate_w, this.rate_h);
    }
    // @画图占位
    placeImg() {
        const ctx = this.el.nativeElement.querySelector('.mycanvas').getContext('2d');

        for (const key in this.imgData) {

            if (this.imgData.hasOwnProperty(key)) {

                const image = new Image();
                const left = this.imgData[key].left;
                const top = this.imgData[key].top;
                image.src = this.imgData[key].src;

                ctx.drawImage(image, left, top, image.width * 0.3, image.height * 0.3);

            }
        }

    }
    // @绑定鼠标移动事件
    attachMouseEvent() {
        // this.el.nativeElement.querySelector('.mycanvas').onmousemove = function(e) {
        //     this.picMove(e.pageX, e.pageY);
        // }
        const that = this;
        document.body.onmousemove = function(e) {
            that.picMove(e.pageX, e.pageY);
        };
    }
    // @根据鼠标点移动的位置来重新绘图
    picMove(pageX: any, pageY: any) {

        const ctx = this.el.nativeElement.querySelector('.mycanvas').getContext('2d');
        ctx.clearRect(0, 0, this.el.nativeElement.querySelector('.mycanvas').width, this.el.nativeElement.querySelector('.mycanvas').height);
        for (const key in this.imgData) {

            if (this.imgData.hasOwnProperty(key)) {

                const image = new Image();
                const offer_w = this.rate_w * pageX * this.imgData[key].scale;
                const offer_h = this.rate_h * pageY * this.imgData[key].scale;

                const left = this.field_width / 100 - offer_w + this.imgData[key].left;
                const top = this.field_height / 100 - offer_h + this.imgData[key].top;

                image.src = this.imgData[key].src;
                ctx.drawImage(image, left, top, image.width * 0.3, image.height * 0.3);

            }

        }
    }

    /************************************************************/


}

