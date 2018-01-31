/** code from https://github.com/angular/material2 */
import { AfterContentChecked, AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
export interface NzAnimatedInterface {
    inkBar: boolean;
    tabPane: boolean;
}
export declare class NzTabChangeEvent {
    index: number;
    tab: NzTabComponent;
}
export declare type NzTabPosition = 'top' | 'bottom' | 'left' | 'right';
export declare type NzTabPositionMode = 'horizontal' | 'vertical';
export declare type NzTabType = 'line' | 'card';
export declare class NzTabSetComponent implements AfterContentChecked, OnInit, AfterViewInit {
    private _renderer;
    _el: any;
    _classMap: any;
    _prefixCls: string;
    _width: any;
    _tabPosition: NzTabPosition;
    _tabPositionMode: NzTabPositionMode;
    _indexToSelect: number | null;
    _selectedIndex: number | null;
    _isViewInit: boolean;
    _tabs: NzTabComponent[];
    nzTabBarExtraTemplate: TemplateRef<void>;
    nzTabBarExtraContent: TemplateRef<void>;
    _tabNav: NzTabsNavComponent;
    _tabContent: ElementRef;
    _hostContent: ElementRef;
    nzAnimated: NzAnimatedInterface | boolean;
    nzShowPagination: boolean;
    nzHide: boolean;
    nzSelectedIndex: number | null;
    readonly nzSelectedIndexChange: Observable<number>;
    nzSelectChange: EventEmitter<NzTabChangeEvent>;
    nzSize: string;
    _type: NzTabType;
    tabs: NzTabComponent[];
    nzTabPosition: NzTabPosition;
    nzType: NzTabType;
    _setPosition(value: NzTabPosition): void;
    _setClassMap(): void;
    clickLabel(index: number): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    private _createChangeEvent(index);
    readonly inkBarAnimated: boolean;
    readonly tabPaneAnimated: boolean;
    constructor(_renderer: Renderer2);
}
