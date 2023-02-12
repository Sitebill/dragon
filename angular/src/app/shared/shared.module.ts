import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from "./grid/grid.module";
import {EntityService} from "./services/entity/entity.service";
import {FormModule} from "./form/form.module";
import {ModalWrappersModule} from "./modal-wrappers/modal-wrappers.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FuseMockApiModule} from "../lib/mock-api";
import {mockApiServices} from "../tests/mock-api";
import {InitFormService} from './form/init-service/init-form.service';


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
        FuseMockApiModule.forRoot(mockApiServices),
    ],
    exports: [
        GridModule,
        FormModule,
        ModalWrappersModule,
    ],
    providers: [
        EntityService,
        InitFormService
    ],
})
export class SharedModule {
}
