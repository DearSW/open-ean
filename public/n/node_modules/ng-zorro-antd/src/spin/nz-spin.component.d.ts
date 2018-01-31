import { AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
export declare class NzSpinComponent implements AfterContentInit {
    private _elementRef;
    private _renderer;
    private _spinning;
    _tip: string;
    nzTip: string;
    nzSpinning: boolean;
    _ref: ElementRef;
    readonly isNested: boolean;
    _el: HTMLElement;
    _size: string;
    nzSize: string;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngAfterContentInit(): void;
}
