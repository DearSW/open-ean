import { EventEmitter, Renderer2 } from '@angular/core';
import { NzThDirective } from './nz-th.directive';
export declare class NzTableSortComponent {
    private nzThDirective;
    private _renderer;
    _value: string;
    nzValueChange: EventEmitter<string>;
    nzValue: string;
    _setValue(value: string): void;
    constructor(nzThDirective: NzThDirective, _renderer: Renderer2);
}
