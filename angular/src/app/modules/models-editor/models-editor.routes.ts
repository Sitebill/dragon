import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelsEditorComponent} from "./models-editor.component";

const routes: Routes = [
    {
        path: '',
        component: ModelsEditorComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModelsEditorRoutes { }
