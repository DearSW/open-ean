import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
export declare class NzAffixComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    private scrollSrv;
    private _el;
    private didScroll;
    private scrollTime;
    private scroll$;
    private scrollWinInTarget$;
    private wrap;
    private fixed;
    private orgOffset;
    nzTarget: Element;
    nzOffsetTop: number;
    nzOffsetBottom: number;
    nzChange: EventEmitter<boolean>;
    constructor(scrollSrv: NzScrollService, _el: ElementRef);
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private reCalculate();
    private process();
    private removeListen();
    private registerScrollEvent();
    ngOnDestroy(): void;
}
