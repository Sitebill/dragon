import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent, ValueGetterParams} from "ag-grid-community";
import {Observable, Subject, takeUntil} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {EntityService} from "../services/entity.service";
import {Entity} from "../models/entity.model";
import {GridResponseModel, RowItem} from "../models/responses/grid-response.model";

@Component({
    selector: 'dg-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [];

    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
    };

    // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;
    public gridData: RowItem[] = [];

    @Input()
    entity!: Entity;


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
        let entity = this.entity;

        this.entityService.fetch(entity)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result: GridResponseModel) => {
                this.gridData = result.rows;
                let columns = Object.keys(this.gridData[0]);
                this.columnDefs = this.composecolumnDefs(columns, this.gridData[0]);
            });
    }

    composecolumnDefs (columns: string[], rowItem: RowItem): Array<ColDef> {
        const columnDefs: Array<ColDef> = [];
        columns.forEach( column => {
            columnDefs.push(
                {
                    headerName: rowItem[column] && rowItem[column].title ? rowItem[column].title : column,
                    colId: column,
                    valueGetter: safeStringValueGetter,
                }
            );
        });
        return columnDefs;
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

function primaryKeyValueGetter(params: ValueGetterParams) {
    return safeStringValueGetter(params);
}
function safeStringValueGetter(params: ValueGetterParams) {
    const colId = params.colDef.colId ? params.colDef.colId : '';
    return params.data && params.data[colId] ? params.data[colId]['value'] : null;
}
