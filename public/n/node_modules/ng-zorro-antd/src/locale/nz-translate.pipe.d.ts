import { PipeTransform } from '@angular/core';
import { NzLocaleService } from './nz-locale.service';
export declare class NzTranslatePipe implements PipeTransform {
    private _locale;
    constructor(_locale: NzLocaleService);
    transform(path: string, keyValue?: object): string;
}
