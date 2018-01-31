import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ng-zorro导入
import { NgZorroAntdModule } from 'ng-zorro-antd';

// @路由模块导入
import { WorkspaceRoutingModule } from './workspace.routes';

import { WorkspaceComponent } from './workspace.component';

@NgModule({
    imports: [
        CommonModule,
        WorkspaceRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        WorkspaceComponent
    ]
})

// @导出工作区的模块
export class WorkspaceModule { }
