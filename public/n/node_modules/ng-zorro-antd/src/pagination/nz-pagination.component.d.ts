import { ElementRef, EventEmitter } from '@angular/core';
export declare class NzPaginationComponent {
    private _elementRef;
    private _showSizeChanger;
    private _showTotal;
    private _showQuickJumper;
    private _simple;
    _el: HTMLElement;
    _current: number;
    _total: number;
    _pageSize: number;
    _firstIndex: number;
    _lastIndex: number;
    _pages: any[];
    _options: number[];
    nzInTable: boolean;
    nzShowSizeChanger: boolean;
    nzShowQuickJumper: boolean;
    nzShowTotal: boolean;
    nzSimple: boolean;
    nzSize: string;
    nzPageSizeChange: EventEmitter<number>;
    nzPageIndexChange: EventEmitter<number>;
    nzPageIndexClickChange: EventEmitter<number>;
    _jumpBefore(pageSize: number): void;
    _jumpAfter(pageSize: number): void;
    /** page size changer select values */
    nzPageSizeSelectorValues: number[];
    nzPageIndex: number;
    nzPageSize: number;
    nzTotal: number;
    _pageSizeChange($event: number): void;
    _nzPageIndexChange($event: number): void;
    /** generate indexes list */
    _buildIndexes(): void;
    _jumpPage(index: number): void;
    readonly _isLastIndex: boolean;
    readonly _isFirstIndex: boolean;
    readonly _roundPageSize: number;
    constructor(_elementRef: ElementRef);
}
