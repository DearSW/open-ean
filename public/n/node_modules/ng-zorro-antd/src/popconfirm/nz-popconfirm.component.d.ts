import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { NzLocaleService } from '../locale/index';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    private _locale;
    private _condition;
    _prefix: string;
    _trigger: string;
    _hasBackdrop: boolean;
    nzContent: any;
    nzOkText: string;
    nzCancelText: string;
    nzCondition: boolean;
    nzOnCancel: EventEmitter<void>;
    nzOnConfirm: EventEmitter<void>;
    constructor(cdr: ChangeDetectorRef, _locale: NzLocaleService);
    show(): void;
    onCancel(): void;
    onConfirm(): void;
}
