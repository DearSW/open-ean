import { AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
export declare class NzInputGroupComponent implements AfterContentInit {
    private _elementRef;
    private _render;
    private _compat;
    _el: HTMLElement;
    _prefixCls: string;
    readonly _isLarge: boolean;
    readonly _isSmall: boolean;
    nzSize: string;
    nzCompact: boolean;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    ngAfterContentInit(): void;
}
