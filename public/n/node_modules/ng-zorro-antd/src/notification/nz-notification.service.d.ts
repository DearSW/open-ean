import { Overlay } from '@angular/cdk/overlay';
import { NzMessageDataOptions } from '../message/nz-message.definitions';
import { NzMessageBaseService } from '../message/nz-message.service';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationData, NzNotificationDataFilled } from './nz-notification.definitions';
export declare class NzNotificationService extends NzMessageBaseService<NzNotificationContainerComponent, NzNotificationData> {
    constructor(overlay: Overlay);
    success(title: string, content: string, options?: NzMessageDataOptions): NzNotificationDataFilled;
    error(title: string, content: string, options?: NzMessageDataOptions): NzNotificationDataFilled;
    info(title: string, content: string, options?: NzMessageDataOptions): NzNotificationDataFilled;
    warning(title: string, content: string, options?: NzMessageDataOptions): NzNotificationDataFilled;
    blank(title: string, content: string, options?: NzMessageDataOptions): NzNotificationDataFilled;
    create(type: string, title: string, content: string, options?: NzMessageDataOptions): NzNotificationDataFilled;
    html(html: string, options?: NzMessageDataOptions): NzNotificationDataFilled;
}
