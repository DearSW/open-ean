import { EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzTabSetComponent } from './nz-tabset.component';
export declare class NzTabComponent implements OnDestroy, OnInit {
    private nzTabSetComponent;
    private disabled;
    position: number | null;
    origin: number | null;
    nzDisabled: boolean;
    nzSelect: EventEmitter<{}>;
    nzClick: EventEmitter<{}>;
    nzDeselect: EventEmitter<{}>;
    _tabHeading: TemplateRef<void>;
    _content: TemplateRef<void>;
    readonly content: TemplateRef<void> | null;
    constructor(nzTabSetComponent: NzTabSetComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
