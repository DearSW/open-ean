import { Component } from '@angular/core';

@Component({
    selector: 'app-root', // @对应Angular1的ng-view渲染
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
}
