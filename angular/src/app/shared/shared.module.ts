import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from "./grid/grid.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        GridModule
    ],
    exports: [
        GridModule
    ],
})
export class SharedModule {
}
