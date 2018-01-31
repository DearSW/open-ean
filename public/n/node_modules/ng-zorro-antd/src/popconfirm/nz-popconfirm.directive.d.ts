import { ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzTooltipDirective } from '../tooltip/nz-tooltip.directive';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
export declare class NzPopconfirmDirective extends NzTooltipDirective {
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzPopconfirmComponent);
}
