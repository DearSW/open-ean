import { AnimationEvent } from '@angular/animations';
import { AfterViewInit, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class NzCheckableTagComponent implements AfterViewInit {
    private _elementRef;
    private _render;
    private _checked;
    private _closable;
    _prefixCls: string;
    _closed: boolean;
    /** Whether tag is checked */
    nzChecked: boolean;
    /** Whether tag is closable */
    nzClosable: boolean;
    /** The tag color */
    nzColor: string;
    /** Event: emit before close */
    nzBeforeClose: EventEmitter<Event>;
    /** Event: emit after close */
    nzClose: EventEmitter<AnimationEvent>;
    /** Event: emit on change */
    nzChange: EventEmitter<boolean>;
    readonly _dataShow: boolean;
    readonly _backgroundColor: string;
    _afterClose(event: AnimationEvent): void;
    readonly _tagCls: object;
    readonly _textClass: string;
    _handleClick(event: Event): void;
    _close(event: MouseEvent): void;
    _isPresetColor(color: string): boolean;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    ngAfterViewInit(): void;
}
