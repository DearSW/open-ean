import { EventEmitter, OnChanges } from '@angular/core';
export declare class NzAlertComponent implements OnChanges {
    private _banner;
    private _closeable;
    private _showIcon;
    _display: boolean;
    antAlert: string;
    nzType: string;
    nzDescription: string;
    nzCloseText: string;
    nzMessage: string;
    nzOnClose: EventEmitter<boolean>;
    nzBanner: boolean;
    nzCloseable: boolean;
    nzShowIcon: boolean;
    _classMap: {
        [x: string]: boolean;
    };
    closeAlert(): void;
    ngOnChanges(): void;
}
