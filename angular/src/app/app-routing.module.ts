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
    {
        path: 'form',
        loadChildren: () => import('./tests/test-form/test-form.module').then(m => m.TestFormModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
