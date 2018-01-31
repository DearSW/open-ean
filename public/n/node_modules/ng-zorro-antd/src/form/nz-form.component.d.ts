import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class NzFormComponent implements OnInit {
    private _elementRef;
    private _renderer;
    _classList: string[];
    _el: HTMLElement;
    _prefixCls: string;
    /**  @deprecated Use `nzLayout` instead. */
    nzType: string;
    nzLayout: string;
    setClassMap(): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
}
