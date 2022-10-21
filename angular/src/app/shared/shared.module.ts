import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from "./grid/grid.module";
import {EntityService} from "./services/entity.service";
import {FormModule} from "./form/form.module";
import {ModalWrappersModule} from "./modal-wrappers/modal-wrappers.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        GridModule,
        FormModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        ModalWrappersModule,
        MatMomentDateModule,
        MatDatepickerModule,
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
