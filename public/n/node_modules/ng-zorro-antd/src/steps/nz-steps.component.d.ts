import { AfterViewInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { NzStepComponent } from './nz-step.component';
export declare type NzDirection = 'horizontal' | 'vertical';
export declare class NzStepsComponent implements OnInit, OnDestroy, AfterViewInit {
    private _progressDot;
    _status: string;
    _current: number;
    _stepsClassMap: object;
    _afterViewInit: boolean;
    _direction: NzDirection;
    _stepsChanges: any;
    steps: QueryList<NzStepComponent>;
    nzDirection: NzDirection;
    nzSize: 'default' | 'small';
    nzProgressDot: boolean;
    nzStatus: string;
    nzCurrent: number;
    setDirectionClass(): void;
    updateChildrenSteps(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
