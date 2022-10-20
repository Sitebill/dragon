import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from "./grid/grid.module";
import {EntityService} from "./services/entity.service";
import {FormModule} from "./form/form.module";
import {ModalWrappersModule} from "./modal-wrappers/modal-wrappers.module";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        GridModule,
        FormModule,
        ModalWrappersModule,
    ],
    exports: [
        GridModule,
        FormModule,
        ModalWrappersModule,
    ],
    providers: [
        EntityService
    ],
})
export class SharedModule {
}
