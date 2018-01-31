import { ElementRef } from '@angular/core';
import { NzCollapsesetComponent } from './nz-collapseset.component';
export declare class NzCollapseComponent {
    private _collapseSet;
    private _elementRef;
    private _disabled;
    _active: boolean;
    _el: any;
    nzTitle: string;
    nzDisabled: boolean;
    nzActive: boolean;
    clickHeader($event: MouseEvent): void;
    constructor(_collapseSet: NzCollapsesetComponent, _elementRef: ElementRef);
}
