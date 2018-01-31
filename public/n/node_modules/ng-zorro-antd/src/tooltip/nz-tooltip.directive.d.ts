import { AfterViewInit, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzToolTipComponent } from './nz-tooltip.component';
export declare class NzTooltipDirective implements AfterViewInit {
    elementRef: ElementRef;
    private hostView;
    private resolver;
    private renderer;
    nzTitle: string;
    isTooltipOpen: any;
    private tooltip;
    private isDynamicTooltip;
    private delayTimer;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzToolTipComponent);
    ngAfterViewInit(): void;
    private show();
    private hide();
    private delayEnterLeave(isOrigin, isEnter, delay?);
}
