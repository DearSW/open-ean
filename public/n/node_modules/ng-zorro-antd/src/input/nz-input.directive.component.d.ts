import { ElementRef, Renderer2 } from '@angular/core';
import { AutoSizeType } from './nz-input.component';
export declare class NzInputDirectiveComponent {
    private _elementRef;
    private _render;
    private _disabled;
    private _readonly;
    size: string;
    nativeElement: HTMLElement;
    _autosize: boolean | AutoSizeType;
    nzSize: string;
    nzDisabled: boolean;
    nzReadonly: boolean;
    nzAutosize: string | boolean | AutoSizeType;
    readonly setLgClass: boolean;
    readonly setSmClass: boolean;
    constructor(_elementRef: ElementRef, _render: Renderer2);
}
