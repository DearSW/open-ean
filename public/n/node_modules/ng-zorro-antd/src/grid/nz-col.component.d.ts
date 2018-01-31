import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChange } from '@angular/core';
import { NzRowComponent } from './nz-row.component';
export declare abstract class EmbeddedProperty {
    span: number;
    pull: number;
    push: number;
    offset: number;
    order: number;
}
export declare class NzColComponent implements OnInit, OnChanges {
    private _elementRef;
    _nzRow: NzRowComponent;
    private _renderer;
    _classList: string[];
    _el: HTMLElement;
    _prefixCls: string;
    readonly paddingLeft: number;
    readonly paddingRight: number;
    nzSpan: number;
    nzOrder: number;
    nzOffset: number;
    nzPush: number;
    nzPull: number;
    nzXs: number | EmbeddedProperty;
    nzSm: number | EmbeddedProperty;
    nzMd: number | EmbeddedProperty;
    nzLg: number | EmbeddedProperty;
    nzXl: number | EmbeddedProperty;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    generateClass(): string[];
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    constructor(_elementRef: ElementRef, _nzRow: NzRowComponent, _renderer: Renderer2);
    ngOnInit(): void;
}
