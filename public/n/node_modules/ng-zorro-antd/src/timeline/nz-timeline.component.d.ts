import { AfterContentInit, OnInit, QueryList, TemplateRef } from '@angular/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export declare class NzTimelineComponent implements OnInit, AfterContentInit {
    _isPending: boolean;
    items: NzTimelineItemComponent[];
    _listOfTimeline: QueryList<NzTimelineItemComponent>;
    _pendingContent: TemplateRef<void>;
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
