import { InjectionToken, Provider } from '@angular/core';
export declare class LoggerService {
    private _loggerState;
    constructor(_loggerState: boolean);
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
}
export declare const NZ_LOGGER_STATE: InjectionToken<boolean>;
export declare function LOGGER_SERVICE_PROVIDER_FACTORY(exist: LoggerService, loggerState: boolean): LoggerService;
export declare const LOGGER_SERVICE_PROVIDER: Provider;
