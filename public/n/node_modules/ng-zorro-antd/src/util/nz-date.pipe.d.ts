import { PipeTransform } from '@angular/core';
export declare class NzDatePipe implements PipeTransform {
    transform(value: Date | number | string, formatString: string): string;
}
