import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent, ValueGetterParams} from "ag-grid-community";
import {Observable, Subject, takeUntil} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {EntityService} from "../services/entity/entity.service";
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
        // console.log(params);
        // console.log("ENTITY",entity);

        this.entityService.fetch(entity)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result: GridResponseModel) => {
                // console.log('RES', result);
                // console.log('ROW', result.rows[0]);
                // if (result.rows.length < 10) return; // test fails with this code
                this.gridData = result.rows;
                let columns = Object.keys(this.gridData[0]);
                // columns.push('grg'); // test fails with this code
                this.columnDefs = this.composecolumnDefs(columns, this.gridData[0]);
                // if (!this.columnDefs) return;

                // console.log('DEF', this.columnDefs);

                //console.log('DEF', this.columnDefs);

        });
    }

    composecolumnDefs (columns: string[], rowItem: RowItem): Array<ColDef> {
        //console.log('COL', columns);
        const columnDefs: Array<ColDef> = [];
        columns.forEach( column => {
            // if (rowItem[column] ) {
            //     console.log('TITLE', rowItem[column]);
            // }
            columnDefs.push(
                {
                    headerName: rowItem[column] && rowItem[column].title ? rowItem[column].title : column,
                    colId: column,
                    valueGetter: chooseValueGetter,
                }
            );
        });
        //console.log('COLDEF', columnDefs);
        return columnDefs;
    }


    // Example of consuming Grid Event
    onCellClicked( e: CellClickedEvent): void {
        console.log('cellClicked', e);
    }



    // Example using Grid's API
    clearSelection(): void {  // isn`t tested
        this.agGrid.api.deselectAll();
    }

    pkvg = primaryKeyValueGetter;

    cvg = chooseValueGetter;

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
    return chooseValueGetter(params);
}
function chooseValueGetter(params: ValueGetterParams) {
    const colId = params.colDef.colId ? params.colDef.colId : '';
    const type = params.data && params.data[colId] && params.data[colId]['type'] ? params.data[colId]['type'] : 'safe_string';
    let result = null;
    switch ( type ) {
        case 'select_by_query':
            result = params.data[colId]['value_string'] ? params.data[colId]['value_string'] : null;
            break;
        default:
            result = params.data && params.data[colId] && params.data[colId]['value'] ? params.data[colId]['value'] : null;

    }
    return result;
}
