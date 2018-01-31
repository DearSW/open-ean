import { DoCheck, ElementRef, EventEmitter, IterableDiffer, IterableDiffers, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { TransferItem } from './item';
export declare class NzTransferListComponent implements OnChanges, OnInit, DoCheck {
    private _el;
    private _renderer;
    private _showSearch;
    direction: string;
    titleText: string;
    dataSource: TransferItem[];
    itemUnit: string;
    itemsUnit: string;
    filter: string;
    showSearch: boolean;
    searchPlaceholder: string;
    notFoundContent: string;
    filterOption: (inputValue: string, item: TransferItem) => boolean;
    render: TemplateRef<void>;
    footer: TemplateRef<void>;
    handleSelectAll: EventEmitter<boolean>;
    handleSelect: EventEmitter<TransferItem>;
    filterChange: EventEmitter<{
        direction: string;
        value: string;
    }>;
    _prefixCls: string;
    _classList: string[];
    _setClassMap(): void;
    stat: {
        checkAll: boolean;
        checkHalf: boolean;
        checkCount: number;
        shownCount: number;
    };
    onHandleSelectAll(status: boolean): void;
    private updateCheckStatus();
    handleFilter(value: string): void;
    handleClear(): void;
    private matchFilter(text, item);
    _listDiffer: IterableDiffer<{}>;
    constructor(_el: ElementRef, _renderer: Renderer2, differs: IterableDiffers);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    _handleSelect(item: TransferItem): void;
}
