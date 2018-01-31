import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzProgressComponent implements ControlValueAccessor, OnInit {
    _statusColorMap: {
        normal: string;
        exception: string;
        success: string;
    };
    _pathString: string;
    _pathStyle: {};
    _circleStyle: {};
    _percent: number;
    _hasFormat: boolean;
    _rawStatus: string;
    onChange: (value: number) => void;
    onTouched: () => void;
    nzType: string;
    nzStrokeWidth: number;
    nzWidth: number;
    nzShowInfo: boolean;
    nzStatus: string;
    _setFormat: (input: number) => string;
    _format: (percent: number) => string;
    updateCircleStatus(): void;
    writeValue(value: number): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    ngOnInit(): void;
}
