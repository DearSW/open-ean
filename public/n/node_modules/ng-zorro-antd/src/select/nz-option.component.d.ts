import { OnDestroy, OnInit } from '@angular/core';
import { NzSelectComponent } from './nz-select.component';
export declare class NzOptionComponent implements OnDestroy, OnInit {
    private _nzSelect;
    private _disabled;
    _value: string;
    _label: string;
    nzOptionTemplate: any;
    nzValue: string;
    nzLabel: string;
    nzDisabled: boolean;
    constructor(_nzSelect: NzSelectComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
