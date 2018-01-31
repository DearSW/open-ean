
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';

const workspaceRoutes: Routes = [
	{
		path: '',
		component: WorkspaceComponent,
		children: [
            { path: '', redirectTo: 'form', pathMatch: 'full' },
			{ path: 'form', loadChildren: './form/form.module#FormModule' }
		]
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class WorkspaceRoutingModule {}
// @写完路由模块，记得在主模块中声明
