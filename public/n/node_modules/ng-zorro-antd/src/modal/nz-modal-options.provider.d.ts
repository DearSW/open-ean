import { TemplateRef, Type } from '@angular/core';
export declare class BaseOptions {
    /**
     * The modal display status
     */
    visible: boolean;
    /**
     * The modal title
     */
    title: string | TemplateRef<void>;
    /**
     * The modal content
     *
     * string | TemplateRef<any> | component
     *
     * A reference to a <ng-template> tag that if set will override the popovers template. Use like so:
     * <ng-template #customTemplate let-options="options">
     *   <div [class]="'popover ' + options.placement" style="display: block">
     *     My custom template
     *   </div>
     * </ng-template>
     *
     * Then pass customTemplate to the mwlConfirm directive like so `[content]="customTemplate"`
     *
     */
    content: string | TemplateRef<void> | Type<void>;
    class: string;
    /**
     * The modal width
     */
    width: string | number;
    /**
     * The modal zIndex
     */
    zIndex: number;
    /**
     * The modal ok button text
     */
    okText: string;
    /**
     * The modal cancel button text
     */
    cancelText: string;
    /**
     * A custom CSS style to be added to the modal
     */
    style: object;
    /**
     * The modal ok button handler
     */
    onOk: () => void;
    /**
     * The modal cancel button handler
     */
    onCancel: () => void;
}
export declare class ModalOptions extends BaseOptions {
    closable: boolean;
    maskClosable: boolean;
    wrapClassName: string;
    footer: TemplateRef<void> | boolean;
    componentParams: object;
}
export declare class ConfirmOptions extends BaseOptions {
    iconType: string;
    confirmType: string;
}
