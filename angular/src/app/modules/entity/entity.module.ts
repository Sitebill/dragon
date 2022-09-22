import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRoutingModule } from './entity-routing.module';
import { EntityComponent } from './entity.component';


@NgModule({
  declarations: [
    EntityComponent
  ],
  imports: [
    CommonModule,
    EntityRoutingModule
  ]
})
export class EntityModule { }
