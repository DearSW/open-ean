import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FormRoutingModule } from './form.routes';

import { FormComponent } from './form.component';

import { StepFormComponent } from './step-form/step-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        FormComponent,
        StepFormComponent,
        AdvancedFormComponent
    ]
})
export class FormModule { }
