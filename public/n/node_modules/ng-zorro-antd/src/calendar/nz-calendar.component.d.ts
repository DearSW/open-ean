import { ElementRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Moment } from 'moment';
import { NzLocaleService } from '../locale/index';
export interface MonthInterface {
    index: number;
    name: string;
    year: number;
    isCurrentMonth: boolean;
    isSelectedMonth: boolean;
    disabled: boolean;
}
export declare type QuartersType = MonthInterface[];
export interface DayInterface {
    number: number;
    isLastMonth: boolean;
    isNextMonth: boolean;
    isCurrentDay: boolean;
    isSelectedDay: boolean;
    isInRange?: boolean;
    title: string;
    date: Moment;
    disabled: boolean;
    firstDisabled: boolean;
    lastDisabled: boolean;
}
export interface WeekInterface {
    days: DayInterface[];
}
export declare enum RangePart {
    Start = 0,
    End = 1,
}
export declare class NzCalendarComponent implements OnInit {
    private _elementRef;
    private _localeService;
    private _clearTime;
    private _datePicker;
    private _fullScreen;
    private _showHeader;
    private _isRange;
    _el: HTMLElement;
    _weeksCalendar: WeekInterface[];
    _quartersCalendar: QuartersType[];
    _listOfWeekName: string[];
    _listOfMonthName: string[];
    _listOfYearName: number[];
    _disabledDate: (value: Date) => boolean;
    _yearUnit: string;
    _monthUnit: string;
    _showMonth: number;
    _showYear: number;
    _value: Date;
    _rangeValue: Date[];
    _hoveringSelectValue: Date;
    _locale: string;
    dateCell: TemplateRef<void>;
    monthCell: TemplateRef<void>;
    nzClickDay: EventEmitter<DayInterface>;
    nzClickMonth: EventEmitter<MonthInterface>;
    nzHoverDay: EventEmitter<DayInterface>;
    nzClearTime: boolean;
    nzMode: string;
    nzFullScreen: boolean;
    nzShowHeader: boolean;
    nzIsRange: boolean;
    nzDisabledDate: (value: Date) => boolean;
    nzDatePicker: boolean;
    nzValue: Date;
    nzRangeValue: Date[];
    nzHoveringSelectValue: Date;
    nzShowYear: number;
    nzShowMonth: number;
    nzLocale: string;
    _removeTime(date: Moment): Moment;
    _clickDay($event: MouseEvent, day: DayInterface): void;
    _clickMonth($event: MouseEvent, month: MonthInterface): void;
    _onDayHover($event: MouseEvent, day: DayInterface): void;
    _isSelectedDay(date: Moment, month: Moment): boolean;
    _isInRange(date: Moment, month: Moment): boolean;
    _buildMonth(d: Moment): WeekInterface[];
    _buildWeek(firstDate: Moment, month: Moment): DayInterface[];
    _buildYears(date: Moment): MonthInterface[][];
    _buildCalendar(): void;
    _generateYears(year: number): number[];
    constructor(_elementRef: ElementRef, _localeService: NzLocaleService);
    ngOnInit(): void;
}
