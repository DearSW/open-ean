import { NgControl } from '@angular/forms';
export declare class NzFormControlComponent {
    private _hasFeedback;
    private _validateStatus;
    ngControl: NgControl;
    nzHasFeedback: boolean;
    nzValidateStatus: string | NgControl;
    readonly isWarning: boolean;
    readonly isValidate: boolean;
    readonly isError: boolean;
    readonly isSuccess: boolean;
    readonly hasFeedBack: boolean;
}
