import { EventEmitter } from '@angular/core';
export declare class NzRowExpandIconComponent {
    private _expand;
    private _showExpand;
    nzExpandChange: EventEmitter<{}>;
    nzExpand: boolean;
    nzShowExpand: boolean;
    readonly hidden: boolean;
    readonly expanded: boolean;
    readonly collapsed: boolean;
    onClick(): void;
}
