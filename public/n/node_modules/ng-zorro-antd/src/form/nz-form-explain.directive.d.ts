import { OnDestroy, OnInit } from '@angular/core';
import { NzFormItemDirective } from './nz-form-item.directive';
export declare class NzFormExplainComponent implements OnDestroy, OnInit {
    private _nzFormItem;
    constructor(_nzFormItem: NzFormItemDirective);
    ngOnDestroy(): void;
    ngOnInit(): void;
}
