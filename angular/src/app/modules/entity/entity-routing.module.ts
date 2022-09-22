import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntityComponent} from "./entity.component";

const routes: Routes = [
    {
        path: '',
        component: EntityComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
