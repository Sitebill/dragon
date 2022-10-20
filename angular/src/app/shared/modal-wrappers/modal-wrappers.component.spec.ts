import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWrappersComponent } from './modal-wrappers.component';

describe('ModalWrappersComponent', () => {
  let component: ModalWrappersComponent;
  let fixture: ComponentFixture<ModalWrappersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWrappersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWrappersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
