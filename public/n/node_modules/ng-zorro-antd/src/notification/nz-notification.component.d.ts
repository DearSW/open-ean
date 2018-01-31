import { NzMessageComponent } from '../message/nz-message.component';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
export declare class NzNotificationComponent extends NzMessageComponent {
    constructor(container: NzNotificationContainerComponent);
    onClickClose(): void;
}
