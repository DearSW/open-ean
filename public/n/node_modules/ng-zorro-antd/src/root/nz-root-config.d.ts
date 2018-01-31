import { InjectionToken } from '@angular/core';
export interface NzRootConfig {
    extraFontName: string;
    extraFontUrl: string;
}
export declare const NZ_ROOT_CONFIG: InjectionToken<NzRootConfig>;
export declare function createNzRootInitializer(document: Document, options?: NzRootConfig): () => void;
