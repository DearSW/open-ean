import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
export declare type NzAvatarShape = 'square' | 'circle';
export declare type NzAvatarSize = 'small' | 'large' | 'default';
export declare class NzAvatarComponent implements OnChanges {
    private _elementRef;
    private _renderer;
    private _el;
    private _prefixCls;
    private _classList;
    private _sizeMap;
    _hasText: boolean;
    _textEl: ElementRef;
    _textStyles: {};
    _isSrcExist: boolean;
    _hasIcon: boolean;
    nzShape: NzAvatarShape;
    nzSize: NzAvatarSize;
    nzText: string;
    nzSrc: string;
    nzIcon: string;
    _setClassMap(): this;
    _imgError(): void;
    private _calcStringSize();
    private _notifyCalc();
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
