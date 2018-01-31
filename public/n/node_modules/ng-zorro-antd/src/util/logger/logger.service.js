/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
var LoggerService = (function () {
    function LoggerService(_loggerState) {
        this._loggerState = _loggerState;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.log = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.warn = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.warn(...args);
            console.warn.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.error = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.error(...args);
            console.error.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.info = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.debug = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log('[NG-ZORRO-DEBUG]', ...args);
            var /** @type {?} */ arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[NG-ZORRO-DEBUG]'].concat(arrs));
        }
    };
    LoggerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] },] },
    ]; };
    return LoggerService;
}());
export { LoggerService };
function LoggerService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoggerService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoggerService.ctorParameters;
    /** @type {?} */
    LoggerService.prototype._loggerState;
}
export var /** @type {?} */ NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) { return exist || new LoggerService(loggerState); }
export var /** @type {?} */ LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};
//# sourceMappingURL=logger.service.js.map