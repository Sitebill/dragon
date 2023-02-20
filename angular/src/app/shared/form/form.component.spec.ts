import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormComponent} from './form.component';
import {forbiddenNullValue} from './form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {EntityService} from "../services/entity/entity.service";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidatorFn,
    Validators
} from "@angular/forms";
import {MockEntityService} from '../../mocks/mock-entity.service';
import {InitFormService} from './init-service/init-form.service';
import {of} from 'rxjs';
import {EntityItem} from '../models/entity-item.model';
import {MockItemModel} from '../../mocks/mock-item.model';
import {RouterTestingModule} from '@angular/router/testing';
import {Entity} from '../models/entity.model';

describe('FormComponent', () => {
    let component: FormComponent;
    let forbiddenNullValueFunction: ValidatorFn;
    let fixture: ComponentFixture<FormComponent>;
    let entityService: EntityService;
    let initFormService: InitFormService;
    let formBuilder: FormBuilder;
    let entity: Entity;
    let entityItem: EntityItem;
    let mockRowItem: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                ReactiveFormsModule
            ],
            declarations: [FormComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: EntityService, useClass: MockEntityService},
                {provide: FormBuilder, useClass: FormBuilder },
                {provide: forbiddenNullValue},
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        entityService = TestBed.inject(EntityService);
        initFormService = TestBed.inject(InitFormService);
        formBuilder = TestBed.inject(FormBuilder);
        forbiddenNullValueFunction = TestBed.inject(forbiddenNullValue);
        mockRowItem = new MockItemModel();
        entity = new Entity();
        component.entity = entity;
        entityItem = new EntityItem(mockRowItem);
        spyOn(entityService, 'fetch_one').and.returnValue(of({item: entityItem, success: true, tabs: {основное: ["client_id",
           "date", "type_id", "status_id", "fio", "phone","email", "address", "order_text", "src_page", "user_id", "Kommentariy", "topic_id",
           "topic_choice", "user_id_razmestyl", "price", "price_ot", "price_do","active", "rabotnik"]}}));
        spyOn(formBuilder, 'group').and.returnValue(new FormGroup({}));
        // spyOn(initFormService, 'initForm')
        formBuilder.group(entityItem);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should forbiddenNullValue return result', () => {
        let control: AbstractControl = new FormControl()
        const controlValue = forbiddenNullValueFunction(control);
        const result = {forbiddenNullValue: {value: null}};
        expect(controlValue).toEqual(result);
    });

    it('should forbiddenNullValue return null', () => {
        let control: AbstractControl = new FormControl({});
        const controlValue = forbiddenNullValueFunction(control);
        expect(controlValue).toEqual(null);
    });

    // forbiddenNullValue(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: any } | null => {
    //         return control.value == null || control.value == 0 ? {forbiddenNullValue: {value: control.value}} : null;
    //     };

    // it('should initForm been called', () => {
    //     component.ngOnInit();
    //     entityService.fetch_one(component.entity);
    //     // fixture.detectChanges();
    //     expect(entityService.fetch_one).toHaveBeenCalledWith(component.entity);
    //     expect(initFormService.initForm).toHaveBeenCalledWith(component);
    // });

    // it('should init-form been called', () => {
    //     spyOn(component, 'init_form');
    //     component.ngOnInit();
    //     expect(component.init_form).toHaveBeenCalled();
    // });
    //
    // it('should callMarker been called', () => {
    //     spyOn(component, 'callMarker');
    //     component.init_form();
    //     expect(component.callMarker).toHaveBeenCalled();
    // });

    // it('should initForm been called', () => {
    //     component.ngOnInit();
    //     entityService.fetch_one(component.entity);
    //     fixture.detectChanges();
    //     expect(initFormService.initForm).toHaveBeenCalled();
    // });
});
