import { OnInit } from '@angular/core';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
export declare class NzTableFilterComponent implements OnInit {
    private nzDropDownComponent;
    hideDropDown(): void;
    constructor(nzDropDownComponent: NzDropDownComponent);
    ngOnInit(): void;
}
