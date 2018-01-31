import { AfterContentInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzRadioButtonComponent } from './nz-radio-button.component';
import { NzRadioComponent } from './nz-radio.component';
export declare class NzRadioGroupComponent implements OnInit, AfterContentInit, ControlValueAccessor {
    private _elementRef;
    private _render;
    _el: HTMLElement;
    _value: string;
    _size: string;
    _prefixCls: string;
    onChange: (_: string) => void;
    onTouched: () => void;
    radios: Array<NzRadioComponent | NzRadioButtonComponent>;
    nzSize: string;
    readonly isLarge: boolean;
    readonly isSmall: boolean;
    addRadio(radio: NzRadioComponent | NzRadioButtonComponent): void;
    checkRadios(): void;
    selectRadio(radio: NzRadioComponent | NzRadioButtonComponent): void;
    updateValue(value: string): void;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    ngAfterContentInit(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
