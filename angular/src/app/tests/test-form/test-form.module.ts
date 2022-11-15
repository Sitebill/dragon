import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestFormComponent} from './test-form.component';
import {TestFormRoutes} from "./test-form.routes";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        TestFormComponent
    ],
    imports: [
        CommonModule,
        TestFormRoutes,
        SharedModule
    ]
})
export class TestFormModule {
}
