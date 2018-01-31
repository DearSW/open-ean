/** code from https://github.com/angular/material2 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentChecked, AfterContentInit, ElementRef, NgZone, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
export declare type ScrollDirection = 'after' | 'before';
/** duplicated defined https://github.com/angular/angular-cli/issues/2034 **/
export declare type NzTabPositionMode = 'horizontal' | 'vertical';
export declare class NzTabsNavComponent implements AfterContentChecked, AfterContentInit {
    _elementRef: ElementRef;
    private _ngZone;
    private _renderer;
    private _dir;
    private _animated;
    private _hideBar;
    private _showPagination;
    _showPaginationControls: boolean;
    _disableScrollAfter: boolean;
    _disableScrollBefore: boolean;
    _scrollDistance: number;
    _selectedIndexChanged: boolean;
    _realignInkBar: Subscription | null;
    _tabLabelCount: number;
    _scrollDistanceChanged: boolean;
    _selectedIndex: number;
    _tabPositionMode: NzTabPositionMode;
    nzSize: string;
    _type: string;
    nzAnimated: boolean;
    nzHideBar: boolean;
    nzType: string;
    _tabBarExtraContent: TemplateRef<void>;
    _labelWrappers: QueryList<NzTabLabelDirective>;
    _inkBar: NzTabsInkBarDirective;
    _tabListContainer: ElementRef;
    _tabList: ElementRef;
    nzShowPagination: boolean;
    nzPositionMode: NzTabPositionMode;
    selectedIndex: number;
    constructor(_elementRef: ElementRef, _ngZone: NgZone, _renderer: Renderer2, _dir: Directionality);
    _onContentChanges(): void;
    _scrollHeader(scrollDir: ScrollDirection): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    _updateTabScrollPosition(): void;
    _updatePagination(): void;
    _checkPaginationEnabled(): void;
    _scrollToLabel(labelIndex: number): void;
    _checkScrollingControls(): void;
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _getMaxScrollDistance(): number;
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    scrollDistance: number;
    readonly viewWidthHeightPix: number;
    readonly tabListScrollWidthHeightPix: number;
    readonly elementRefOffSetWidthHeight: number;
    _getLayoutDirection(): Direction;
    _alignInkBarToSelectedTab(): void;
}
