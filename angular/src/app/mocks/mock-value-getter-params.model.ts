import {ColDef, Column, ColumnApi, GridApi, ValueGetterParams} from 'ag-grid-community';

export class MockValueGetterParamsModel implements ValueGetterParams{

    api: GridApi<any>;
    colDef: ColDef<any> = {colId: ''};
    column: Column;
    columnApi: ColumnApi;
    context= null;
    data: any = {};
    node = null;
    getValue(field: string): any { }

    constructor(colId = '', type = '', value_string = '', value = '') {
        this.api = new GridApi<any>();
        this.column = new Column({}, null, '', false);
        this.columnApi = new ColumnApi();
        this.colDef.colId = colId;
        if (this.colDef && this.colDef.colId) {
            this.data[this.colDef.colId] = {
                type: type,
                value_string: value_string,
                value: value,
            };
        }
        }
    }
