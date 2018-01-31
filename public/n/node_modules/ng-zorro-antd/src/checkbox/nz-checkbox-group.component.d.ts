import { ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzCheckboxGroupComponent implements ControlValueAccessor {
    private _elementRef;
    private _render;
    private _disabled;
    _el: HTMLElement;
    _options: any[];
    _prefixCls: string;
    onChange: any;
    onTouched: any;
    nzType: string;
    nzDisabled: boolean;
    _optionChange(): void;
    constructor(_elementRef: ElementRef, _render: Renderer);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
}
