import { Overlay } from '@angular/cdk/overlay';
import { Type } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageData, NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
export declare class NzMessageBaseService<ContainerClass extends NzMessageContainerComponent, MessageData> {
    private _idPrefix;
    protected _counter: number;
    protected _container: ContainerClass;
    constructor(overlay: Overlay, containerClass: Type<ContainerClass>, _idPrefix?: string);
    remove(messageId?: string): void;
    createMessage(message: object, options?: NzMessageDataOptions): NzMessageDataFilled;
    protected _generateMessageId(): string;
}
export declare class NzMessageService extends NzMessageBaseService<NzMessageContainerComponent, NzMessageData> {
    constructor(overlay: Overlay);
    success(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    error(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    info(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    warning(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    loading(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    create(type: string, content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    html(html: string, options?: NzMessageDataOptions): NzMessageDataFilled;
}
