import { NzCollapseComponent } from './nz-collapse.component';
export declare class NzCollapsesetComponent {
    private _accordion;
    private _bordered;
    panels: NzCollapseComponent[];
    nzAccordion: boolean;
    nzBordered: boolean;
    nzClick(collapse: NzCollapseComponent): void;
    addTab(collapse: NzCollapseComponent): void;
}
