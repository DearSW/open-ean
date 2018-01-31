import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export declare type NzAlign = 'top' | 'middle' | 'bottom';
export declare type NzType = 'flex' | null;
export declare class NzRowComponent implements OnInit {
    private _elementRef;
    private _renderer;
    _classList: string[];
    _el: HTMLElement;
    _prefixCls: string;
    _gutter: number;
    _type: NzType;
    _align: NzAlign;
    _justify: NzJustify;
    nzType: NzType;
    nzAlign: NzAlign;
    nzJustify: NzJustify;
    nzGutter: number;
    setStyle(): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
}
