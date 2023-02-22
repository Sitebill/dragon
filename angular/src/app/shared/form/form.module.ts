import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormComponent } from './form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        FormComponent
    ],
    exports: [
        FormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        NgxMaterialTimepickerModule,
        MatTooltipModule,
        FormsModule,
        NgSelectModule,
        MatCheckboxModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
    ],
})
export class FormModule {
}
