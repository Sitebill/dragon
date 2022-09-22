import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'models-editor',
        loadChildren: () => import('./modules/models-editor/models-editor.module').then(m => m.ModelsEditorModule),
    },
    {
        path: 'entity',
        loadChildren: () => import('./modules/entity/entity.module').then(m => m.EntityModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
