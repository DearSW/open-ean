import { AnimationEvent } from '@angular/animations';
import { AfterViewInit, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class NzTagComponent implements AfterViewInit {
    private _elementRef;
    private _render;
    private _closable;
    _prefixCls: string;
    _closed: boolean;
    /** Whether tag is closable */
    nzClosable: boolean;
    /** The tag color */
    nzColor: string;
    /** Event: emit before close */
    nzBeforeClose: EventEmitter<Event>;
    /** Event: emit after close */
    nzClose: EventEmitter<AnimationEvent>;
    readonly _dataShow: boolean;
    readonly _backgroundColor: string;
    _afterClose(event: AnimationEvent): void;
    readonly _tagCls: object;
    readonly _textClass: string;
    _close(event: Event): void;
    _isPresetColor(color: string): boolean;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    ngAfterViewInit(): void;
}
