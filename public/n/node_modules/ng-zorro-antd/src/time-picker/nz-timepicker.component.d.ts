import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { NzTimePickerInnerComponent } from './nz-timepicker-inner.component';
export declare class NzTimePickerComponent extends NzTimePickerInnerComponent {
    private _timePickerDisabled;
    _dropDownPosition: string;
    _positions: ConnectionPositionPair[];
    trigger: any;
    nzDisabled: boolean;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    _manualChangeInput(box: HTMLInputElement): void;
    _overHour(): void;
    _overMinute(): void;
    _overSecond(): void;
    _clearValue(): void;
    _openCalendar(): void;
    _closeCalendar(): void;
    setDisabledState(isDisabled: boolean): void;
}
