import { ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzTooltipDirective } from '../tooltip/nz-tooltip.directive';
import { NzPopoverComponent } from './nz-popover.component';
export declare class NzPopoverDirective extends NzTooltipDirective {
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzPopoverComponent);
}
