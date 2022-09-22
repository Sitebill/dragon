import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModelsEditorComponent} from './models-editor.component';
import {ModelsEditorRoutes} from "./models-editor.routes";


@NgModule({
    declarations: [
        ModelsEditorComponent
    ],
    imports: [
        CommonModule,
        ModelsEditorRoutes
    ],
    bootstrap: [ModelsEditorComponent]
})
export class ModelsEditorModule {
}
