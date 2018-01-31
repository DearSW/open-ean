import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ModuleWithComponentFactories, TemplateRef, Type } from '@angular/core';
import { NzLocaleService } from '../locale/index';
import { NzConfirmComponent } from './nz-confirm.component';
import { BaseOptions } from './nz-modal-options.provider';
import { NzModalSubject } from './nz-modal-subject.service';
import { NzModalComponent } from './nz-modal.component';
export interface ConfigInterface {
    type?: string;
    title?: string;
    content?: string | Type<any>;
    width?: string | number;
    zIndex?: number;
    iconType?: string;
    okText?: string;
    nzClass?: string;
    cancelText?: string;
    style?: object;
    class?: string;
    closable?: boolean;
    maskClosable?: boolean;
    wrapClassName?: string;
    footer?: TemplateRef<void> | boolean;
    showConfirmLoading?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    componentParams?: object;
    moduleWithComponentFactories?: ModuleWithComponentFactories<void>;
}
export declare class NzModalService {
    private _appRef;
    private _cfr;
    private _locale;
    _modalCompFactory: ComponentFactory<NzModalComponent>;
    _confirmCompFactory: ComponentFactory<NzConfirmComponent>;
    constructor(_appRef: ApplicationRef, _cfr: ComponentFactoryResolver, _locale: NzLocaleService);
    _initConfig(initialConfig: ConfigInterface, options?: BaseOptions): any;
    _getConfirmCb(fn?: () => Promise<void> | void, isShowConfirmLoading?: boolean): any;
    _open(props: ConfigInterface, factory: ComponentFactory<NzModalComponent | NzConfirmComponent>): NzModalSubject;
    /**
     * Open modal dialog
     */
    open(config: ConfigInterface): NzModalSubject;
    /**
     * Open confirm dialog
     */
    _openConfirm(config: ConfigInterface): NzModalSubject;
    /**
     * Open info dialog
     */
    info(props: ConfigInterface): NzModalSubject;
    /**
     * Open success dialog
     */
    success(props: ConfigInterface): NzModalSubject;
    /**
     * Open error dialog
     */
    error(props: ConfigInterface): NzModalSubject;
    /**
     * Open warning dialog
     */
    warning(props: ConfigInterface): NzModalSubject;
    /**
     * Open confirm dialog
     */
    confirm(props: ConfigInterface): NzModalSubject;
}
