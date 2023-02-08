import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GridComponent } from './grid.component';
import {EntityService} from "../services/entity/entity.service";
import {ColumnApi, GridApi, GridReadyEvent} from 'ag-grid-community';
import {EntityItem} from '../models/entity-item.model';
import {MockEntityService} from '../../mocks/mock-entity-service';
import {MockItem} from '../../mocks/mock-item.model';
import {of} from 'rxjs';
import {RowItem} from '../models/responses/grid-response.model';
import {Entity} from '../models/entity.model';

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: EntityService, useClass: MockEntityService},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    grid= fixture.componentInstance;
    entityService = TestBed.inject(EntityService);
    mockRowItem = new MockItem();
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
        mockRowItem = new MockItem('title');
        gridData = [{item: new EntityItem(mockRowItem)}];
        columns = Object.keys(gridData[0]);
        const columnDefs = grid.composecolumnDefs(columns, gridData[0]);
        spyOn(grid, 'composecolumnDefs').and.returnValue(columnDefs);
        expect(columnDefs[0].headerName).toBe('title');
        expect(columnDefs).toEqual(controlColumnDefs);
    });

});
