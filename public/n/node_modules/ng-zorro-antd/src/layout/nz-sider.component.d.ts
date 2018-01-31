import { EventEmitter } from '@angular/core';
import { NzLayoutComponent } from './nz-layout.component';
export declare type NzBreakPoinit = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare class NzSiderComponent {
    private nzLayoutComponent;
    private _collapsed;
    private _collapsible;
    private _trigger;
    _dimensionMap: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
    _below: boolean;
    nzWidth: string;
    nzCollapsedWidth: number;
    nzBreakpoint: NzBreakPoinit;
    nzTrigger: boolean;
    nzCollapsible: boolean;
    nzCollapsed: boolean;
    nzCollapsedChange: EventEmitter<{}>;
    readonly setZeroClass: boolean;
    readonly setFlex: string;
    readonly setWidth: number | string;
    onWindowResize(e: UIEvent): void;
    toggleCollapse(): void;
    constructor(nzLayoutComponent: NzLayoutComponent);
    readonly _isZeroTrigger: boolean;
    readonly _isSiderTrgger: boolean;
}
