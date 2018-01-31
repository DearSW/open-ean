import { OnChanges, SimpleChanges } from '@angular/core';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
import { NzSliderComponent } from './nz-slider.component';
export declare class NzSliderHandleComponent implements OnChanges {
    private _slider;
    nzClassName: string;
    nzVertical: string;
    nzOffset: number;
    nzValue: number;
    nzTipFormatter: (value: number) => string;
    nzActive: boolean;
    tooltip: NzToolTipComponent;
    tooltipTitle: string;
    style: object;
    constructor(_slider: NzSliderComponent);
    ngOnChanges(changes: SimpleChanges): void;
    onMouseEnter($event: MouseEvent): void;
    onMouseLeave($event: MouseEvent): void;
    private _updateTooltipTitle();
    private _updateTooltipPosition();
    private _updateStyle();
}
