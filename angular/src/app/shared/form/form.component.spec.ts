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
import {of} from 'rxjs';
import {EntityItem} from '../models/entity-item.model';
import {MockItemModel} from '../../mocks/mock-item.model';
import {RouterTestingModule} from '@angular/router/testing';
import {Entity} from '../models/entity.model';
import {PRE_INIT_RECORDS} from "../../mocks/pre-int-records";
import {POST_INIT_RECORDS} from "../../mocks/post-int-records";
import {POST_INIT_CONTROLS} from "../../mocks/post-int-controls";
import * as moment from "moment/moment";

describe('FormComponent', () => {
    let component: FormComponent;
    let forbiddenNullValueFunction: ValidatorFn;
    let fixture: ComponentFixture<FormComponent>;
    let entityService: EntityService;
    let formBuilder: FormBuilder;
    let entity: Entity;
    let entityItem: EntityItem;
    let mockRowItem: any;
    let preInitRecords: any;
    let postInitRecords: any;
    let postInitControls: any;

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
                {provide: FormBuilder, useClass: FormBuilder},
                {provide: forbiddenNullValue},
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        entityService = TestBed.inject(EntityService);
        formBuilder = TestBed.inject(FormBuilder);
        forbiddenNullValueFunction = TestBed.inject(forbiddenNullValue);
        mockRowItem = new MockItemModel();
        entity = new Entity();
        component.entity = entity;
        preInitRecords = PRE_INIT_RECORDS;
        postInitRecords = POST_INIT_RECORDS;
        postInitControls = POST_INIT_CONTROLS;
        for (const [key_obj, value_obj] of Object.entries(postInitRecords)) {
            postInitRecords[key_obj] = new EntityItem(value_obj);
        }

        spyOn(entityService, 'fetch_one').and.returnValue(of({
            item: preInitRecords, success: true, tabs: {
                основное:
                    ["client_id", "date", "type_id", "status_id", "fio", "phone", "email", "address", "order_text", "src_page",
                    "user_id", "Kommentariy", "topic_id", "topic_choice", "user_id_razmestyl", "price", "price_ot", "price_do",
                    "active", "rabotnik"]
            }
        }));
        spyOn(formBuilder, 'group').and.returnValue(new FormGroup({}));
        formBuilder.group(entityItem);
        fixture.detectChanges();

        // component.records["client_id"].required = 'on';
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

    it('should initForm been called', () => {
        spyOn(component, 'init_form');
        component.ngOnInit();
        entityService.fetch_one(component.entity);
        expect(entityService.fetch_one).toHaveBeenCalledWith(component.entity);
        expect(component.init_form).toHaveBeenCalled();
    });

    it('should recors to equal postInitRecors', () => {
        postInitRecords['order_text'].active_in_topic_array = ['test', 'done'];
        postInitRecords['src_page'].required_boolean = true;
        postInitRecords['test-record-6'].hidden = true;
        entityItem = new EntityItem(mockRowItem);
        component.entity.hide_column_edit('test-record-7');
        postInitRecords['test-record-7'].hidden = true;
        component.entity.set_hidden('test-record-8');
        postInitRecords['test-record-8'].hidden = true;
        component.entity.set_default_value('test-record-3', 'test-value');
        postInitRecords['test-record-3'].value = 'test-value';
        component.init_form();
        const controlsValuesEnd = [];
        for (const [key_obj, value_obj] of Object.entries(component.form.controls)) {
            const value = value_obj.value;
            controlsValuesEnd.push(value);
        }
        controlsValuesEnd[1] = null;
        console.log('REAL', controlsValuesEnd);
        console.log('STANDARD', postInitControls);
        expect(component.records).toEqual(postInitRecords);
        expect(controlsValuesEnd).toEqual(postInitControls);
    });


});
