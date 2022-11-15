import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestFormComponent} from './test-form.component';
import {TestFormRoutes} from "./test-form.routes";


@NgModule({
    declarations: [
        TestFormComponent
    ],
    imports: [
        CommonModule,
        TestFormRoutes
    ]
})
export class TestFormModule {
}
