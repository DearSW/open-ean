/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    var /** @type {?} */ cc = c - b;
    var /** @type {?} */ tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = (function () {
    /* tslint:disable-next-line:no-any */
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** 设置 `el` 滚动条位置 */
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            (/** @type {?} */ (el)).scrollTop = topValue;
        }
    };
    /** 获取 `el` 相对于视窗距离 */
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        var /** @type {?} */ rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var /** @type {?} */ doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** 获取 `el` 滚动条位置 */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    NzScrollService.prototype.getScroll = /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    function (el, top) {
        if (top === void 0) { top = true; }
        var /** @type {?} */ target = el ? el : window;
        var /** @type {?} */ prop = top ? 'pageYOffset' : 'pageXOffset';
        var /** @type {?} */ method = top ? 'scrollTop' : 'scrollLeft';
        var /** @type {?} */ isWindow = target === window;
        var /** @type {?} */ ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    };
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param containerEl 容器，默认 `window`
     * @param targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param easing 动作算法，默认：`easeInOutCubic`
     * @param callback 动画结束后回调
     */
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        var /** @type {?} */ target = containerEl ? containerEl : window;
        var /** @type {?} */ scrollTop = this.getScroll(target);
        var /** @type {?} */ startTime = Date.now();
        var /** @type {?} */ frameFunc = function () {
            var /** @type {?} */ timestamp = Date.now();
            var /** @type {?} */ time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    };
    NzScrollService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    return NzScrollService;
}());
export { NzScrollService };
function NzScrollService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NzScrollService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NzScrollService.ctorParameters;
    /** @type {?} */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
export var /** @type {?} */ SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=nz-scroll.service.js.map