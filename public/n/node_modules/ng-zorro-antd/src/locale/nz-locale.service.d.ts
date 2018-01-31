import { Provider } from '@angular/core';
import { LoggerService } from '../util/logger/index';
import { NzLocale } from './nz-locale.class';
export declare class NzLocaleService {
    private _logger;
    private _locale;
    constructor(locale: NzLocale, _logger: LoggerService);
    translate(path: string, data?: any): string;
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param locale The translating letters
     */
    setLocale(locale: NzLocale): void;
    getLocale(): NzLocale;
    private _getObjectPath(obj, path);
}
export declare function NZ_LOCALE_SERVICE_PROVIDER_FACTORY(exist: NzLocaleService, locale: NzLocale, logger: LoggerService): NzLocaleService;
export declare const NZ_LOCALE_SERVICE_PROVIDER: Provider;
