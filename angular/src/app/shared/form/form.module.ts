import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormComponent } from './form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        FormComponent
    ],
    exports: [
        FormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class FormModule {
}
