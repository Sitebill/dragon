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
import {FormType} from "../models/api.model";

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
        entityItem = new EntityItem(mockRowItem);
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
        postInitRecords['test-record'].active_in_topic_array = [ '1','2' ];
        postInitRecords['src_page'].required_boolean = true;
        postInitRecords['test-record'].required_boolean = true;
        postInitRecords['test-record-2'].required_boolean = true;
        postInitRecords['test-record-6'].hidden = true;
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
        // console.log('REAL', controlsValuesEnd);
        // console.log('STANDARD', postInitControls);
        expect(component.records).toEqual(postInitRecords);
        expect(controlsValuesEnd).toEqual(postInitControls);
    });

    it('should onCommentToggle change comment_open to false', () => {
        component.onCommentToggle(false);
        const commentOpen = component.getCommentOpen();
        const commentHeightFix = component.getCommentHeightFix();
        expect(commentOpen).toBe(false);
        expect(commentHeightFix).toBe('comment-off-height-fix');
    });

    it('should onCommentToggle change comment_open to true', () => {
        component.onCommentToggle(true);
        const commentOpen = component.getCommentOpen();
        const commentHeightFix = component.getCommentHeightFix();
        expect(commentOpen).toBe(true);
        expect(commentHeightFix).toBe('comment-on-height-fix');
    });

    it('should get_flex_padding return p-12', () => {
        entityItem.type = '';
        entityItem.hidden = false;
        const flexPadding = component.get_flex_padding('', '', entityItem);
        expect(flexPadding).toBe('p-12');
    });

    it('should get_flex_padding return ""', () => {
        entityItem.type = 'hidden';
        entityItem.hidden = true;
        const flexPadding = component.get_flex_padding('', '', entityItem);
        expect(flexPadding).toBe('');
    });

    it('should get_flex_padding return p-12 border-top-1px', () => {
        entityItem.fxFlex = 1;
        const flexPadding = component.get_flex_padding('', '', entityItem);
        expect(flexPadding).toBe('p-12 border-top-1px');
    });

    it('should get_flex_width return auto', () => {
        const flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe('auto');
    });

    it('should get_flex_width return 0', () => {
        entityItem.type = 'hidden';
        entityItem.hidden = true;
        const flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(0);
    });

    it('should get_flex_width return 100 for types...', () => {
        entityItem.type = 'uploads';
        let flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(100);
        entityItem.type = 'textarea';
        flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(100);
        entityItem.type = 'textarea_editor';
        flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(100);
        entityItem.type = 'injector';
        flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(100);
        entityItem.type = 'photo';
        flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(100);
        entityItem.type = 'geodata';
        flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(100);
    });

    it('should get_flex_width return parameter', () => {
        entityItem.parameters['fxFlex'] = 'test';
        const flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe('test');
    });

    it('should get_flex_width return fxFlex', () => {
        entityItem.fxFlex = 1;
        const flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(1);
    });

    it('should get_flex_width return column_mode', () => {
        component.column_mode = 1;
        const flexWidth = component.get_flex_width('', '', entityItem);
        expect(flexWidth).toBe(1);
    });

    it('should get_flex_width return auto for visible_items_counter', () => {
        component.rows = ['client_id'];
        // console.log(224, component.rows);
        component.count_visible_items();
        const flexWidth = component.get_flex_width('', '', entityItem);
        expect(component.get_visible_items_counter() === 1).toBe(true);
        expect(flexWidth).toBe('auto');
    });

    it('should get_flex_width return 100 for FormType.inline', () => {
       // console.log(232, component.)
        const flexWidth = component.get_flex_width('', FormType.inline, entityItem);
        expect(flexWidth).toBe(100);
    });

    it('should get_flex_width return value for size', () => {
        let flexWidth = component.get_flex_width('lg', '', entityItem);
        expect(flexWidth).toBe(33);
        flexWidth = component.get_flex_width('xl', '', entityItem);
        expect(flexWidth).toBe(20);
        flexWidth = component.get_flex_width('md', '', entityItem);
        expect(flexWidth).toBe(50);
        flexWidth = component.get_flex_width('xs', '', entityItem);
        expect(flexWidth).toBe(100);
    });

    it('should get_appearance return appearance.outline', () => {
        const appearance = component.get_appearance();
        expect(appearance).toBe(component.appearance.outline);
    });

    it('should apply_topic_activity do sth', () => {
        component.form.controls['topic_id'].patchValue(1);
        component.records['test-record'].required_boolean = false;
        component.records['test-record-3'].type = 'compose';
        component.apply_topic_activity();
        expect(component.form.controls['topic_id'].value).toBe(1);
        expect(component.records['order_text'].hidden).toBe(true);
        expect(component.records['test-record'].required_boolean).toBe(true);
        expect(component.records['test-record-3'].hidden).toBe(true);
        expect(component.records['test-record-3'].type).toBe('hidden');
        component.records['test-record-3'].type = 'select_box';
    });

    // it('should fetchMore been called', () => {
    //     component.onScrollToEnd('test-record');
    // });
});
