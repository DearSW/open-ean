import { OnInit, TemplateRef } from '@angular/core';
export declare class NzBadgeComponent implements OnInit {
    private _showDot;
    private _showZero;
    count: number;
    maxNumberArray: any;
    countArray: any[];
    countSingleArray: number[];
    content: TemplateRef<void>;
    readonly setNoWrapper: boolean;
    nzOverflowCount: number;
    nzShowZero: boolean;
    nzDot: boolean;
    nzText: string;
    nzStyle: any;
    nzStatus: string;
    nzCount: number;
    ngOnInit(): void;
}
