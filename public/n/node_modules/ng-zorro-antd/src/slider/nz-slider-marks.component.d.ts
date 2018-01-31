import { OnChanges, SimpleChanges } from '@angular/core';
export declare class NzSliderMarksComponent implements OnChanges {
    private _vertical;
    private _included;
    nzLowerBound: number;
    nzUpperBound: number;
    nzMarksArray: MarksArray;
    nzClassName: string;
    nzMin: number;
    nzMax: number;
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
        label: Mark;
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
        label: Mark;
    }): number;
    buildAttrs(): void;
    togglePointActive(): void;
}
export declare type Mark = string | {
    style: object;
    label: string;
};
export declare class Marks {
    number: Mark;
}
export declare class MarksArray extends Array<{
    value: number;
    offset: number;
    config: Mark;
}> {
    [index: number]: {
        value: number;
        offset: number;
        config: Mark;
    };
}
