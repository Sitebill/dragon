import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EntityRoutingModule} from './entity-routing.module';
import {EntityComponent} from './entity.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        EntityComponent
    ],
    imports: [
        CommonModule,
        EntityRoutingModule,
        SharedModule
    ]
})
export class EntityModule {
}
