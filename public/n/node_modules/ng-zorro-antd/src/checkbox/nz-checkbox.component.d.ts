import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzCheckboxComponent implements OnInit, ControlValueAccessor, OnChanges {
    private _elementRef;
    private _render;
    private _disabled;
    private _indeterminate;
    _el: HTMLElement;
    _prefixCls: string;
    _innerPrefixCls: string;
    _inputPrefixCls: string;
    _checked: boolean;
    _focused: boolean;
    onChange: any;
    onTouched: any;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    _classMap: {
        [x: string]: boolean;
    };
    readonly nzChecked: boolean;
    onClick(e: MouseEvent): void;
    updateValue(value: boolean): void;
    nzFocus(): void;
    nzBlur(): void;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    updateClassMap(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
}
