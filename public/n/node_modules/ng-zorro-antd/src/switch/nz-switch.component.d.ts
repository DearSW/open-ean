import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzSwitchComponent implements OnInit, ControlValueAccessor {
    private _disabled;
    _prefixCls: string;
    _innerPrefixCls: string;
    _classMap: any;
    _size: string;
    _checked: boolean;
    onChange: (value: boolean) => void;
    onTouched: () => void;
    nzSize: string;
    nzDisabled: boolean;
    onClick(e: MouseEvent): void;
    updateValue(value: boolean): void;
    setClassMap(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
