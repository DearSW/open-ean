/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    var /** @type {?} */ lastTime = 0;
    return function (callback) {
        var /** @type {?} */ currTime = new Date().getTime();
        var /** @type {?} */ timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var /** @type {?} */ id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    var /** @type {?} */ prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix
        ? window[prefix + "RequestAnimationFrame"]
        : requestAnimationFramePolyfill();
}
export var /** @type {?} */ reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=request-animation.js.map