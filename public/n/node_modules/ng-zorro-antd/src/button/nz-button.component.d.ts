import { AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
export declare type NzButtonType = 'primary' | 'dashed' | 'danger';
export declare type NzButtonShape = 'circle' | null;
export declare type NzButtonSize = 'small' | 'large' | 'default';
export declare class NzButtonComponent implements AfterContentInit {
    private _elementRef;
    private _renderer;
    private _ghost;
    private _loading;
    _el: HTMLElement;
    nativeElement: HTMLElement;
    _iconElement: HTMLElement;
    _type: NzButtonType;
    _shape: NzButtonShape;
    _size: NzButtonSize;
    _classList: string[];
    _iconOnly: boolean;
    _clicked: boolean;
    _prefixCls: string;
    _sizeMap: {
        large: string;
        small: string;
    };
    nzGhost: boolean;
    nzType: NzButtonType;
    nzShape: NzButtonShape;
    nzSize: NzButtonSize;
    nzLoading: boolean;
    /** toggle button clicked animation */
    _onClick(): void;
    _setIconDisplay(value: boolean): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    _setClassMap(): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngAfterContentInit(): void;
    readonly _innerIElement: HTMLElement;
}
