import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GridComponent } from './grid.component';
import {EntityService} from "../services/entity.service";
import {AgGridEvent} from 'ag-grid-community/dist/lib/events';
import {ColumnApi, GridApi, GridReadyEvent} from 'ag-grid-community';
import {of} from 'rxjs';
import {GridResponseModel, RowItem} from '../models/responses/grid-response.model';
import {EntityItem} from '../models/entity-item.model';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  // const item = new EntityItem();
  //
  // const row = new class implements RowItem {
  //     [name: string]: EntityItem;
  //     item = new EntityItem();
  // }
  // const ent = new class implements GridResponseModel {
  //     success = true;
  //     rows = [];
  // }

  const fakeEntityService = jasmine.createSpyObj('fakeEntityService', {
      'fetch': of(''),
      'fetch-one': of('')
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: EntityService, useValue: fakeEntityService},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  });

   xit('should onGridReady been called', () => {
        const params: GridReadyEvent = new class implements GridReadyEvent<any> {
            api = new GridApi();
            columnApi = new ColumnApi();
            context: any;
            type= 'gridReady';
        }
        component.onGridReady(params );
        fixture.detectChanges();
        expect(fakeEntityService.fetch).toHaveBeenCalled();
   });
});
