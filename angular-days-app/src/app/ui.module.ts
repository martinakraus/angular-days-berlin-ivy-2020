import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [],
    exports: [
        MatToolbarModule,
        MatGridListModule,
        MatTabsModule,
        MatButtonModule,
        MatCardModule
    ],
})
export class UiModule {}
