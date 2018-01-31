export declare class NzSliderService {
    pauseEvent(e: Event): void;
    getPrecision(num: number): number;
    cloneArray<T>(arr: T[]): T[];
    isNotTouchEvent(e: TouchEvent): boolean;
    valueToOffset(min: number, max: number, value: number): number;
    correctNumLimit(num: number, min: number, max: number): number;
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param elem HTMLElement ref
     */
    getElementOffset(elem: HTMLElement): {
        top: number;
        left: number;
    };
}
