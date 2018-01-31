import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NzLocaleService } from '../locale/index';
import { TransferItem } from './item';
export interface TransferCanMove {
    direction: string;
    list: TransferItem[];
}
export interface TransferChange {
    from: string;
    to: string;
    list: TransferItem[];
}
export interface TransferSearchChange {
    direction: string;
    value: string;
}
export interface TransferSelectChange {
    direction: string;
    checked: boolean;
    list: TransferItem[];
    item: TransferItem;
}
export declare class NzTransferComponent implements OnChanges {
    private _locale;
    private el;
    private cd;
    private _showSearch;
    leftFilter: string;
    rightFilter: string;
    nzDataSource: TransferItem[];
    nzTitles: string[];
    nzOperations: string[];
    nzListStyle: object;
    nzItemUnit: string;
    nzItemsUnit: string;
    canMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    render: TemplateRef<void>;
    footer: TemplateRef<void>;
    nzShowSearch: boolean;
    nzFilterOption: (inputValue: string, item: TransferItem) => boolean;
    nzSearchPlaceholder: string;
    nzNotFoundContent: string;
    nzChange: EventEmitter<TransferChange>;
    nzSearchChange: EventEmitter<TransferSearchChange>;
    nzSelectChange: EventEmitter<TransferSelectChange>;
    leftDataSource: TransferItem[];
    rightDataSource: TransferItem[];
    private splitDataSource();
    private getCheckedData(direction);
    handleLeftSelectAll: (checked: boolean) => void;
    handleRightSelectAll: (checked: boolean) => void;
    handleLeftSelect: (item: TransferItem) => void;
    handleRightSelect: (item: TransferItem) => void;
    handleSelect(direction: 'left' | 'right', checked: boolean, item?: TransferItem): void;
    handleFilterChange(ret: {
        direction: string;
        value: string;
    }): void;
    leftActive: boolean;
    rightActive: boolean;
    private updateOperationStatus(direction, count?);
    moveToLeft: () => void;
    moveToRight: () => void;
    moveTo(direction: string): void;
    private truthMoveTo(direction, list);
    constructor(_locale: NzLocaleService, el: ElementRef, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
}
