import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from "./grid/grid.module";
import {EntityService} from "./services/entity.service";
import {FormModule} from "./form/form.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        GridModule,
        FormModule,
    ],
    exports: [
        GridModule,
        FormModule
    ],
    providers: [
        EntityService
    ],
})
export class SharedModule {
}
