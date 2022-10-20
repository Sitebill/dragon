import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { ModalGridComponent } from './modal-grid/modal-grid.component';
import {FormModule} from "../form/form.module";



@NgModule({
  declarations: [
    ModalFormComponent,
    ModalGridComponent
  ],
    imports: [
        CommonModule,
        FormModule
    ]
})
export class ModalWrappersModule { }
