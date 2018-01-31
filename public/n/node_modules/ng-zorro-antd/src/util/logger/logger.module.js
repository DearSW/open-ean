/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LOGGER_SERVICE_PROVIDER, NZ_LOGGER_STATE } from './logger.service';
var LoggerModule = (function () {
    function LoggerModule() {
    }
    LoggerModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: NZ_LOGGER_STATE, useValue: false },
                        LOGGER_SERVICE_PROVIDER,
                    ],
                },] },
    ];
    /** @nocollapse */
    LoggerModule.ctorParameters = function () { return []; };
    return LoggerModule;
}());
export { LoggerModule };
function LoggerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoggerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoggerModule.ctorParameters;
}
//# sourceMappingURL=logger.module.js.map