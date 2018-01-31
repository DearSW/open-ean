import { Subject } from 'rxjs/Subject';
export declare class NzModalSubject extends Subject<any> {
    modalId: string;
    eventsQueue: {};
    destroy(type?: any): void;
    on(eventType: string, cb: () => void): void;
    constructor();
}
