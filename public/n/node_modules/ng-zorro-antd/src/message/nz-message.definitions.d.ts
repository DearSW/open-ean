export interface NzMessageDataOptions {
    nzDuration?: number;
    nzAnimate?: boolean;
    nzPauseOnHover?: boolean;
}
export interface NzMessageData {
    html?: string;
    type?: 'success' | 'info' | 'warning' | 'error' | 'loading' | string;
    content?: string;
}
export interface NzMessageDataFilled extends NzMessageData {
    messageId: string;
    state?: 'enter' | 'leave';
    options?: NzMessageDataOptions;
    createdAt: Date;
}
