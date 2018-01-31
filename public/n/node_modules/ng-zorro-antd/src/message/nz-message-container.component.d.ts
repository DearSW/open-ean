import { NzMessageConfig } from './nz-message-config';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
export declare class NzMessageContainerComponent {
    messages: NzMessageDataFilled[];
    config: NzMessageConfig;
    constructor(defaultConfig: NzMessageConfig, config: NzMessageConfig);
    createMessage(message: NzMessageDataFilled): void;
    removeMessage(messageId: string): void;
    removeMessageAll(): void;
    protected _mergeMessageOptions(options: NzMessageDataOptions): NzMessageDataOptions;
}
