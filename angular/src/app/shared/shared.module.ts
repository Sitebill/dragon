import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from "./grid/grid.module";
import {EntityService} from "./services/entity.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        GridModule
    ],
    exports: [
        GridModule
    ],
    providers: [
        EntityService
    ],
})
export class SharedModule {
}
