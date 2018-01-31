import { ElementRef } from '@angular/core';
export declare class NzCarouselContentDirective {
    private _el;
    width: number;
    isActive: boolean;
    left: number;
    top: number;
    fadeMode: boolean;
    nativeElement: HTMLElement;
    readonly setActiveClass: boolean;
    readonly setWidth: number;
    readonly setLeft: number;
    readonly setTop: number;
    readonly setPosition: string;
    readonly setOpacity: number;
    constructor(_el: ElementRef);
}
