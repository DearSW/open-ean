import { OnInit, TemplateRef } from '@angular/core';
export declare class NzTimelineItemComponent implements OnInit {
    itemHeadClass: {
        'ant-timeline-item-head-blue': boolean;
    };
    _color: string;
    _custom: boolean;
    _lastItem: boolean;
    _customContent: TemplateRef<void>;
    nzColor: string;
    ngOnInit(): void;
}
