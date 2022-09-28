import {Component, OnInit, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {Observable, Subject, takeUntil} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {EntityService} from "../services/entity.service";
import {Entity} from "../models/entity.model";
import {GridDataModel, GridResponseModel} from "../models/responses/grid-response.model";

@Component({
    selector: 'dg-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [
        {field: 'make'},
        {field: 'model'},
        {field: 'price'}
    ];

    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
    };

    // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;
    public gridData: GridDataModel[] = [];

    protected _unsubscribeAll: Subject<any>;

    // For accessing the Grid's API
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

    constructor(
        private entityService: EntityService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
    }

    // Example load data from sever
    onGridReady(params: GridReadyEvent) {
        let entity = new Entity();

        this.entityService.fetch(entity)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result: GridResponseModel) => {
                console.log(result.data);
                this.gridData = result.data;
            });
    }

    // Example of consuming Grid Event
    onCellClicked( e: CellClickedEvent): void {
        console.log('cellClicked', e);
    }

    // Example using Grid's API
    clearSelection(): void {
        this.agGrid.api.deselectAll();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
