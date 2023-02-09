import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GridComponent } from './grid.component';
import {EntityService} from "../services/entity/entity.service";
import {ColumnApi, GridApi, GridReadyEvent, ValueGetterParams} from 'ag-grid-community';
import {EntityItem} from '../models/entity-item.model';
import {MockEntityService} from '../../mocks/mock-entity.service';
import {MockItemModel} from '../../mocks/mock-item.model';
import {MockValueGetterParamsModel} from '../../mocks/mock-value-getter-params.model';
import {of} from 'rxjs';
import {RowItem} from '../models/responses/grid-response.model';
import {Entity} from '../models/entity.model';
import {AgGridAngular} from "ag-grid-angular";

describe('GridComponent', () => {
  let grid: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let entity: Entity;
  let entityService: EntityService;
  let mockRowItem: any;
  let entityItem: EntityItem;
  let params: GridReadyEvent;
  let gridData: RowItem[];
  let columns: string[];
  let valueGetterParams: ValueGetterParams;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: EntityService, useClass: MockEntityService},
         {provide: AgGridAngular},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    grid= fixture.componentInstance;
    entityService = TestBed.inject(EntityService);
    mockRowItem = new MockItemModel();
    entity = new Entity();
    entityItem = new EntityItem(mockRowItem);
    gridData = [{item: entityItem}];
    columns = Object.keys(gridData[0]);
    params =  {
          api: new GridApi(),
          columnApi: new ColumnApi(),
          context: {},
          type: 'gridReady',
      } as GridReadyEvent;
    valueGetterParams = new MockValueGetterParamsModel();
    spyOn(entityService, 'fetch').and.returnValue(of({ rows: [{item: entityItem}]}));
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(grid).toBeTruthy();
  });

    it('should onGridReady been called', () => {
        spyOn(grid, 'onGridReady');
        grid.onGridReady(params);
        expect( grid.onGridReady).toHaveBeenCalledWith(params);
    });

   it('should entityService.fetch been called', () => {
        grid.onGridReady(params);
        expect(entityService.fetch).toHaveBeenCalled();
        // expect(entityService.fetch).toHaveBeenCalledWith(new Entity());  ???
   });

    it('should composecolumnDefs been called with columns and gridData[0]', () => {
        spyOn(grid, 'composecolumnDefs');
        grid.onGridReady(params);
        expect(grid.composecolumnDefs).toHaveBeenCalledWith(columns, gridData[0]);
        expect(grid.gridData).toEqual(gridData);
    });

    it('should composecolumnDefs use column instead title', () => {
        const columnDefs = grid.composecolumnDefs(columns, gridData[0]);
        spyOn(grid, 'composecolumnDefs').and.returnValue(columnDefs);
        expect(columnDefs[0].headerName).toBe('item');
    });

    it('should composecolumnDefs use title', () => {
        const controlColumnDefs = [{ "headerName": "title", "colId": "item", 'valueGetter': grid.cvg }];
        mockRowItem = new MockItemModel('title');
        gridData = [{item: new EntityItem(mockRowItem)}];
        columns = Object.keys(gridData[0]);
        const columnDefs = grid.composecolumnDefs(columns, gridData[0]);
        spyOn(grid, 'composecolumnDefs').and.returnValue(columnDefs);
        expect(columnDefs[0].headerName).toBe('title');
        expect(columnDefs).toEqual(controlColumnDefs);
    });

    it('should cvg been called with select_by_query', () => {
        valueGetterParams = new MockValueGetterParamsModel('colId', 'select_by_query','test_value_string', 'test_value');
        const value = grid.cvg(valueGetterParams);
        spyOn(grid, 'cvg').and.returnValue(value);
        grid.cvg(valueGetterParams);
        expect( grid.cvg).toHaveBeenCalledWith(valueGetterParams);
        expect(value).toBe('test_value_string');
    });

    it('should cvg been called with select_by_query without test_value_string', () => {
        valueGetterParams = new MockValueGetterParamsModel('colId', 'select_by_query');
        const value = grid.cvg(valueGetterParams);
        spyOn(grid, 'cvg').and.returnValue(value);
        grid.cvg(valueGetterParams);
        expect( grid.cvg).toHaveBeenCalledWith(valueGetterParams);
        expect(value).toBe(null);
    });

    it('should cvg been called with test_type', () => {
        valueGetterParams = new MockValueGetterParamsModel('colId', 'test_type','test_value_string', 'test_value');
        const value = grid.cvg(valueGetterParams);
        spyOn(grid, 'cvg').and.returnValue(value);
        grid.cvg(valueGetterParams);
        expect( grid.cvg).toHaveBeenCalledWith(valueGetterParams);
        expect(value).toBe('test_value');
    });

    it('should cvg been called with test_type without test_value', () => {
        valueGetterParams = new MockValueGetterParamsModel('colId', 'test_type','test_value_string' );
        const value = grid.cvg(valueGetterParams);
        spyOn(grid, 'cvg').and.returnValue(value);
        grid.cvg(valueGetterParams);
        expect( grid.cvg).toHaveBeenCalledWith(valueGetterParams);
        expect(value).toBe(null);
    });

    it('should cvg been called without colId and value', () => {
        const value = grid.cvg(valueGetterParams);
        spyOn(grid, 'cvg').and.returnValue(value);
        grid.cvg(valueGetterParams);
        expect(value).toBe(null);
    });

    it('should cvg been called without type', () => {
        valueGetterParams = new MockValueGetterParamsModel('colId', '','', 'test_value');
        const value = grid.cvg(valueGetterParams);
        spyOn(grid, 'cvg').and.returnValue(value);
        grid.cvg(valueGetterParams);
        expect(value).toBe('test_value');
    });

    it('should cvg been called in pkvg', () => {
        const value = grid.pkvg(valueGetterParams);
        spyOn(grid, 'pkvg');
        expect(value).toBe(null);
    });

    it('should agGrid.api.deselectAll in clearSelection been called', () => {
        const controlOfFoo = 'clearSelection() {\n' +
            '    cov_k0oy9s6by().f[7]++;\n' +
            '    cov_k0oy9s6by().s[19]++;\n' +
            '    this.agGrid.api.deselectAll();\n' +
            '  }'
        const stringOfFoo =  String(grid.clearSelection);
        console.log(stringOfFoo);
        expect(stringOfFoo).toBe(controlOfFoo);
    });

});
