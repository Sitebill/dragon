import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityComponent } from './entity.component';
import {MatDialog} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ColumnApi, GridApi, GridReadyEvent} from 'ag-grid-community';

describe('EntityComponent', () => {
  let component: EntityComponent;
  let fixture: ComponentFixture<EntityComponent>;

    const fakeMatDialog = jasmine.createSpyObj('fakeMatDialog', ['open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
          {provide: MatDialog, useValue: fakeMatDialog},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should openModalForm been called', () => {
        component.openModalForm();
        fixture.detectChanges();
        expect(component.openModalForm).toHaveBeenCalled();
  });
});
