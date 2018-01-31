import { ElementRef, OnInit, OnChanges, OnDestroy, SimpleChange, SimpleChanges, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZipButtonOptions } from './interface';
export declare class NzUploadBtnComponent implements OnInit, OnChanges, OnDestroy {
    private http;
    private _el;
    private _renderer;
    private cd;
    private reqs;
    private inited;
    private destroy;
    file: ElementRef;
    classes: string[];
    options: ZipButtonOptions;
    onClick(): void;
    onKeyDown(e: KeyboardEvent): void;
    onFileDrop(e: DragEvent): void;
    onChange(e: any): void;
    private attrAccept(file, acceptedFiles);
    private uploadFiles(fileList);
    private upload(file, fileList);
    private post(file);
    private xhr(args);
    abort(file?: any): void;
    _prefixCls: string;
    _classList: string[];
    _setClassMap(): void;
    constructor(http: HttpClient, _el: ElementRef, _renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
