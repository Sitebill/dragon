import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GridComponent } from './grid.component';
import {EntityService} from "../services/entity/entity.service";
import {ColumnApi, GridApi, GridReadyEvent} from 'ag-grid-community';
import {Entity} from '../models/entity.model';
import {EntityItem} from '../models/entity-item.model';
import {MockEntityService} from '../../mocks/mock-entity-service';
import {MockItem} from '../../mocks/mock-item.model';
import {of} from 'rxjs';

describe('GridComponent', () => {
  let grid: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let entityService: EntityService;
  let mockRowItem: any;
  let entityItem: EntityItem;
  let params: GridReadyEvent;

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
    // httpClient = TestBed.inject(HttpClient);
    entityService = TestBed.inject(EntityService);
    mockRowItem = new MockItem();
    entityItem = new EntityItem(mockRowItem);
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
        grid.onGridReady(params);
        expect(entityService.fetch).toHaveBeenCalled();
   });

    it('should composecolumnDefs been called with columns and gridData[0]', () => {
        const gridData = [{item: entityItem}]
        const columns = Object.keys(gridData[0]);
        spyOn(grid, 'composecolumnDefs');
        grid.onGridReady(params);
        expect(grid.composecolumnDefs).toHaveBeenCalledWith(columns, gridData[0]);
        expect(grid.gridData).toEqual(gridData);
    });
});
