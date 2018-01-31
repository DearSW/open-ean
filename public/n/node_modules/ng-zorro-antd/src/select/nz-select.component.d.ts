import { CdkConnectedOverlay, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { AfterContentChecked, AfterContentInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzLocaleService } from '../locale/index';
import { NzOptionComponent } from './nz-option.component';
export declare class NzSelectComponent implements OnInit, AfterContentInit, AfterContentChecked, ControlValueAccessor {
    private _elementRef;
    private _renderer;
    private _locale;
    private _allowClear;
    private _disabled;
    private _isTags;
    private _isMultiple;
    private _keepUnListOptions;
    private _showSearch;
    _el: HTMLElement;
    _isOpen: boolean;
    _prefixCls: string;
    _classList: string[];
    _dropDownClassMap: any;
    _dropDownPrefixCls: string;
    _selectionClassMap: any;
    _selectionPrefixCls: string;
    _size: string;
    _value: string[] | string;
    _placeholder: string;
    _notFoundContent: string;
    _searchText: string;
    _triggerWidth: number;
    _selectedOption: NzOptionComponent;
    _operatingMultipleOption: NzOptionComponent;
    _selectedOptions: Set<NzOptionComponent>;
    _options: NzOptionComponent[];
    _cacheOptions: NzOptionComponent[];
    _filterOptions: NzOptionComponent[];
    _tagsOptions: NzOptionComponent[];
    _activeFilterOption: NzOptionComponent;
    _isMultiInit: boolean;
    _dropDownPosition: 'top' | 'center' | 'bottom';
    _composing: boolean;
    _mode: any;
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    searchInputElementRef: any;
    trigger: ElementRef;
    dropdownUl: ElementRef;
    nzSearchChange: EventEmitter<string>;
    nzOpenChange: EventEmitter<boolean>;
    nzScrollToBottom: EventEmitter<boolean>;
    nzFilter: boolean;
    nzMaxMultiple: number;
    _cdkOverlay: CdkConnectedOverlay;
    nzAllowClear: boolean;
    nzKeepUnListOptions: boolean;
    nzMode: string;
    nzMultiple: boolean;
    nzPlaceHolder: string;
    nzNotFoundContent: string;
    nzSize: string;
    nzShowSearch: boolean;
    nzTags: boolean;
    nzDisabled: boolean;
    nzOpen: boolean;
    /** new nz-option insert or new tags insert */
    addOption: (option: any) => void;
    /** nz-option remove or tags remove */
    removeOption(option: NzOptionComponent): void;
    /** dropdown position changed */
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    compositionStart(): void;
    compositionEnd(): void;
    /** clear single selected option */
    clearSelect($event?: MouseEvent): void;
    /** click dropdown option by user */
    clickOption(option: NzOptionComponent, $event?: MouseEvent): void;
    /** choose option */
    chooseOption(option: NzOptionComponent, isUserClick?: boolean, $event?: MouseEvent): void;
    updateWidth(element: HTMLInputElement, text: string): void;
    /** determine if option in set */
    isInSet(set: Set<NzOptionComponent>, option: NzOptionComponent): NzOptionComponent;
    /** cancel select multiple option */
    unSelectMultipleOption: (option: any, $event?: any, emitChange?: boolean) => void;
    /** select multiple option */
    selectMultipleOption(option: NzOptionComponent, $event?: MouseEvent): void;
    /** emit multiple options */
    emitMultipleOptions(): void;
    /** update selected option when add remove option etc */
    updateSelectedOption(currentModelValue: string | string[], triggerByNgModel?: boolean): void;
    forceUpdateSelectedOption(value: string | string[]): void;
    nzValue: string | string[];
    clearAllSelectedOption(emitChange?: boolean): void;
    handleKeyEnterEvent(event: KeyboardEvent): void;
    handleKeyBackspaceEvent(event: KeyboardEvent): void;
    handleKeyDownEvent($event: MouseEvent): void;
    handleKeyUpEvent($event: MouseEvent): void;
    preOption(option: NzOptionComponent, options: NzOptionComponent[]): NzOptionComponent;
    nextOption(option: NzOptionComponent, options: NzOptionComponent[]): NzOptionComponent;
    clearSearchText(): void;
    updateFilterOption(updateActiveFilter?: boolean): void;
    onSearchChange(searchValue: string): void;
    onClick(e: MouseEvent): void;
    onKeyDown(e: KeyboardEvent): void;
    closeDropDown(): void;
    setClassMap(): void;
    setDropDownClassMap(): void;
    scrollToActive(): void;
    flushComponentState(): void;
    _setTriggerWidth(): void;
    _getTriggerRect(): ClientRect;
    writeValue(value: string | string[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    dropDownScroll(ul: HTMLUListElement): void;
    checkDropDownScroll(): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _locale: NzLocaleService);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    private _updateValue(value, emitChange?);
}
