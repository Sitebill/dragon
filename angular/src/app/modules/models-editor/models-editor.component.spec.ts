import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsEditorComponent } from './models-editor.component';

describe('ModelsEditorComponent', () => {
  let component: ModelsEditorComponent;
  let fixture: ComponentFixture<ModelsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
