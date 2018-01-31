import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare type CascaderExpandTrigger = 'click' | 'hover';
export declare type CascaderTriggerType = 'click' | 'hover';
export interface CascaderOption {
    value?: string;
    label?: string;
    title?: string;
    disabled?: boolean;
    loading?: boolean;
    isLeaf?: boolean;
    parent?: CascaderOption;
    children?: CascaderOption[];
    [key: string]: any;
}
export interface DisplayLabelContext {
    labels?: string[];
    selectedOptions?: CascaderOption[];
}
export declare class NzCascaderComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, ControlValueAccessor {
    private _elementRef;
    private _render;
    private _cdr;
    private _allowClear;
    private _disabled;
    private _enableCache;
    private _showArrow;
    private _showInput;
    private _showSearch;
    private _changeOnSelect;
    _el: HTMLElement;
    _prefixCls: string;
    _inputPrefixCls: string;
    _dropDownPosition: string;
    _focused: boolean;
    _popupVisible: boolean;
    _displayLabel: string | TemplateRef<void>;
    _displayLabelIsTemplate: boolean;
    _displayLabelContext: DisplayLabelContext;
    __inputValue: string;
    _inputValue: string;
    _lastValue: any[];
    _selectedOptions: CascaderOption[];
    _activatedOptions: CascaderOption[];
    _nzColumns: CascaderOption[][];
    private _clickOutsideHandler;
    private _touchOutsideHandler;
    private _delayTimer;
    onChange: any;
    onTouched: any;
    /** Whether is disabled */
    nzDisabled: boolean;
    /** Input size, one of `large` `default` `small` */
    nzSize: 'large' | 'default' | 'small';
    /** Input placeholder */
    nzPlaceHolder: string;
    /** Whether show input box. Defaults to `true`. */
    nzShowInput: boolean;
    /** Whether can search. Defaults to `false`. */
    nzShowSearch: boolean;
    /** Whether allow clear. Defaults to `true`. */
    nzAllowClear: boolean;
    /** Hover text for the clear icon */
    nzClearText: string;
    /** Whether to show arrow */
    nzShowArrow: boolean;
    /** Specify content to show when no result matches. */
    nzNotFoundContent: string;
    /** Additional className of popup overlay */
    nzPopupClassName: string;
    /** Additional className of popup overlay column */
    nzColumnClassName: string;
    /** Options for first column, sub column will be load async */
    nzOptions: CascaderOption[];
    /** Whether cache children when they were loaded asych */
    nzEnableCache: boolean;
    /** Expand column item when click or hover, one of 'click' 'hover' */
    nzExpandTrigger: CascaderExpandTrigger;
    /** Change value on each selection if set to true */
    nzChangeOnSelect: boolean;
    /** Change value on selection only if this function returns `true` */
    nzChangeOn: (option: CascaderOption, level: number) => boolean;
    /** Delay time to show when mouse enter, when `nzExpandTrigger` is `hover`. */
    nzMouseEnterDelay: number;
    /** Delay time to hide when mouse enter, when `nzExpandTrigger` is `hover`. */
    nzMouseLeaveDelay: number;
    /** Triggering mode: can be Array<'click'|'hover'> */
    nzTriggerAction: CascaderTriggerType | CascaderTriggerType[];
    /** Render function of displaying selected options */
    nzDisplayRender: (label: string[], selectedOptions: CascaderOption[]) => string | TemplateRef<any>;
    /** Property name for getting `value` in the option */
    nzValueProperty: string;
    /** Property name for getting `label` in the option */
    nzLabelProperty: string;
    menu: ElementRef;
    tabIndex: string;
    /** Event: emit on popup show or hide */
    nzVisibleChange: EventEmitter<boolean>;
    /** Event: emit on values changed */
    nzChange: EventEmitter<any[]>;
    /** Event: emit on values and selection changed */
    nzSelectionChange: EventEmitter<CascaderOption[]>;
    /**
     * Event: emit on option selected, event data：{option: any, index: number}
     */
    nzSelect: EventEmitter<{
        option: CascaderOption;
        index: number;
    }>;
    /**
     * Event: emit before loading children. event data：{option: any|null, index: number, resolve, reject}
     */
    nzLoad: EventEmitter<{
        option: CascaderOption;
        index: number;
        resolve(children: CascaderOption[]): void;
        reject(): void;
    }>;
    /** Event: emit on the clear button clicked */
    nzClear: EventEmitter<any>;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    nzFocus(): void;
    nzBlur(): void;
    readonly _pickerLabelCls: any;
    readonly _arrowCls: any;
    readonly _clearCls: any;
    readonly _inputCls: any;
    readonly _menuCls: any;
    /** 获取菜单中列的样式 */
    readonly _columnCls: any;
    /** 获取列中Option的样式 */
    _getOptionCls(option: CascaderOption, index: number): any;
    _getLabel(): string | TemplateRef<void>;
    /** prevent input change event */
    _handlerInputChange(event: Event): void;
    /** input blur */
    _handleInputBlur(event: Event): void;
    /** input focus */
    _handleInputFocus(event: Event): void;
    /** input key down */
    _handleInputKeyDown(event: KeyboardEvent): void;
    _setInputValue(inputValue: any, fireSearch?: boolean): void;
    _hasInput(): boolean;
    _hasSelection(): boolean;
    /** Whether the clear button is visible */
    readonly _showClearIcon: boolean;
    /** clear the input box and selected options */
    _clearSelection(event: Event): void;
    readonly _displayRender: (label: string[], selectedOptions: CascaderOption[]) => string | TemplateRef<any>;
    _buildDisplayLabel(): void;
    /** 由用户来定义点击后是否变更 */
    _isChangeOn(option: CascaderOption, index: number): boolean;
    onKeyDown(event: KeyboardEvent): void;
    _onTriggerClick(event: MouseEvent): void;
    _onTriggerMouseEnter(event: MouseEvent): void;
    _onTriggerMouseLeave(event: MouseEvent): void;
    _isClickTiggerAction(): boolean;
    _isPointerTiggerAction(): boolean;
    _closeMenu(): void;
    /**
     * 显示或者隐藏菜单
     *
     * @param visible true-显示，false-隐藏
     * @param delay 延迟时间
     */
    _delaySetPopupVisible(visible: boolean, delay: number): void;
    _isPopupVisible(): boolean;
    setPopupVisible(popupVisible: boolean): void;
    /** load init data if necessary */
    _beforeVisible(): void;
    _onDocumentClick(event: MouseEvent): void;
    _clearOutsideHandler(): void;
    _clearDelayTimer(): void;
    /** 获取Option的值，例如，可以指定labelProperty="name"来取Name */
    _getOptionLabel(option: CascaderOption): any;
    /** 获取Option的值，例如，可以指定valueProperty="id"来取ID */
    _getOptionValue(option: CascaderOption): any;
    _isActiveOption(option: CascaderOption, index: number): boolean;
    /**
     * 设置某列的激活的菜单选项
     *
     * @param option 菜单选项
     * @param index  选项所在的列组的索引
     */
    _setActiveOption(option: CascaderOption, index: number): void;
    _onSelectOption(option: CascaderOption, index: number): void;
    _setColumnData(options: CascaderOption[], index: number): void;
    /**
     * 鼠标点击选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    _onOptionClick(option: CascaderOption, index: number, event: Event): void;
    /**
     * press `up` or `down` arrow to select the sibling option.
     */
    _moveUpOrDown(isUp: boolean): void;
    _moveUp(): void;
    _moveDown(): void;
    /**
     * press `left` arrow to remove the last selected option.
     * If there is no option selected, emit `nzClear` event.
     */
    _moveLeft(): void;
    /**
     * press `right` arrow to select the next column option.
     */
    _moveRight(): void;
    /**
     * 鼠标划入选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    _onOptionMouseEnter(option: CascaderOption, index: number, event: Event): void;
    /**
     * 鼠标划出选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    _onOptionMouseLeave(option: CascaderOption, index: number, event: Event): void;
    _delaySelect(option: CascaderOption, index: number, doSelect: boolean): void;
    _getSubmitValue(): any[];
    _onValueChange(): void;
    constructor(_elementRef: ElementRef, _render: Renderer2, _cdr: ChangeDetectorRef);
    _addHostClass(classname: string): void;
    _removeHostClass(classname: string): void;
    /**
     * Write a new value to the element.
     *
     * @Override (From ControlValueAccessor interface)
     */
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
