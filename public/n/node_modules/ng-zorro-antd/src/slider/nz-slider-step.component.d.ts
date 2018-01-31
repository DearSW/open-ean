import { OnChanges, SimpleChanges } from '@angular/core';
import { MarksArray } from './nz-slider-marks.component';
export declare class NzSliderStepComponent implements OnChanges {
    private _vertical;
    private _included;
    nzLowerBound: number;
    nzUpperBound: number;
    nzMarksArray: MarksArray;
    nzPrefixCls: string;
    nzVertical: boolean;
    nzIncluded: boolean;
    attrs: Array<{
        id: number;
        value: number;
        offset: number;
        classes: {
            [key: string]: boolean;
        };
        style: object;
    }>;
    ngOnChanges(changes: SimpleChanges): void;
    trackById(index: number, attr: {
        id: number;
        value: number;
        offset: number;
        classes: {
            [key: string]: boolean;
        };
        style: object;
    }): number;
    buildAttrs(): void;
    togglePointActive(): void;
}
