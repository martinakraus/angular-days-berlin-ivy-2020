import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cat',
    templateUrl: './cat.component.html',
    styleUrls: [ './cat.component.scss' ]
})
export class CatComponent {
    @Input()
    catId: string;
}
