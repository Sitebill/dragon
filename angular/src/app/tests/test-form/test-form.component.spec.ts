import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestFormComponent} from './test-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('TestFormComponent', () => {
    let component: TestFormComponent;
    let fixture: ComponentFixture<TestFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestFormComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();

        fixture = TestBed.createComponent(TestFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
