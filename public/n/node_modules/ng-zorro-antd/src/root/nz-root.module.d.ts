import { ComponentFactoryResolver, Injector, OnDestroy } from '@angular/core';
export declare class NzRootModule implements OnDestroy {
    private _document;
    private styleHostComponent;
    constructor(_document: any, injector: Injector, resolver: ComponentFactoryResolver);
    ngOnDestroy(): void;
}
