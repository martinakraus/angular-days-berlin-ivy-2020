import { Component, ɵmarkDirty } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
    title = 'AngularDays 2021';
}
