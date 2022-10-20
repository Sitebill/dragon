import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormComponent } from './form.component';


@NgModule({
    declarations: [
        FormComponent
    ],
    exports: [
        FormComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FormModule {
}
