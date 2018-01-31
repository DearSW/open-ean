import { Renderer2, ElementRef, SimpleChange, SimpleChanges, OnInit, OnChanges } from '@angular/core';
import { NzLocaleService } from '../locale/index';
import { UploadListType, UploadFile, ShowUploadListInterface } from './interface';
export declare class NzUploadListComponent implements OnInit, OnChanges {
    private _el;
    private _renderer;
    private _locale;
    listType: UploadListType;
    items: UploadFile[];
    icons: ShowUploadListInterface;
    onPreview: (file: UploadFile) => void;
    onRemove: (file: UploadFile) => void;
    _prefixCls: string;
    _classList: string[];
    _setClassMap(): void;
    private locale;
    handlePreview(file: UploadFile, e: any): void;
    handleClose(file: UploadFile): void;
    constructor(_el: ElementRef, _renderer: Renderer2, _locale: NzLocaleService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
}
