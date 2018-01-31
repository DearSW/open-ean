import { OnChanges, SimpleChanges } from '@angular/core';
export declare class NzSliderTrackComponent implements OnChanges {
    private _vertical;
    private _included;
    nzOffset: any;
    nzLength: any;
    nzClassName: any;
    nzVertical: boolean;
    nzIncluded: boolean;
    style: {
        bottom?: string;
        height?: string;
        left?: string;
        width?: string;
        visibility?: string;
    };
    ngOnChanges(changes: SimpleChanges): void;
}
