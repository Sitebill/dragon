import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
    declarations: [
        GridComponent
    ],
    exports: [
        GridComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AgGridModule
    ]
})
export class GridModule { }
