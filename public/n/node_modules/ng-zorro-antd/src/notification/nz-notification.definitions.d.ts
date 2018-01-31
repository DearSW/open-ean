import { NzMessageData, NzMessageDataOptions } from '../message/nz-message.definitions';
export interface NzNotificationData extends NzMessageData {
    type?: 'success' | 'info' | 'warning' | 'error' | 'blank';
    title?: string;
}
export interface NzNotificationDataFilled extends NzNotificationData {
    messageId: string;
    state?: 'enter' | 'leave';
    options?: NzMessageDataOptions;
    createdAt: Date;
}
