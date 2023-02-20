import {InitFormService} from './init-form.service';
import {FormComponent} from '../form.component';
import {EndpointService} from '../../services/endpoint/endpoint.service';
import {HttpClient} from '@angular/common/http';
import {MockHttpClient} from '../../../mocks/mock-http-client';
import {EntityService} from '../../services/entity/entity.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Entity} from '../../models/entity.model';
import {MockItemModel} from '../../../mocks/mock-item.model';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('InitFormService', () => {
    let service: InitFormService;
    let formComponent: FormComponent;
    let mockEntityItem: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                 {provide: FormComponent},
                 {provide: FormBuilder},
                 {provide: HttpClient, useClass: MockHttpClient },

            ]
        })
        service = TestBed.inject(InitFormService);
        formComponent = TestBed.inject(FormComponent);
        formComponent.entity = new Entity();
        mockEntityItem = new MockItemModel();
        formComponent.rows =
            ['client_id', 'date', 'type_id', 'user_id', 'topic_id',];
        formComponent.records = {
            client_id: mockEntityItem,
            date: mockEntityItem,
            type_id: mockEntityItem,
            user_id: mockEntityItem,
            topic_id: mockEntityItem,
        }
        formComponent.records['client_id'].value = 3607;
        const data = formComponent.entity;
        formComponent.entity.hide_column_edit('date');
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

    it('should form_control_item to be value', () => {
        const form_control_item_value = new FormControl(formComponent.records['client_id'].value).value;
        expect(form_control_item_value).toBe(3607);
    });

    it('should form_control_status to be VALID', () => {
        const form_control_item_status = new FormControl(formComponent.records['client_id'].value).status;
        expect(form_control_item_status).toBe('VALID');
    });

    it('should service.initForm been called with formComponent', () => {
        spyOn(service, 'initForm')
        service.initForm(formComponent);
        expect(service.initForm).toHaveBeenCalledWith(formComponent);
    });

    it('should formComponent.count_visible_items been called', () => {
        spyOn(formComponent, 'count_visible_items');
        service.initForm(formComponent);
        expect(formComponent.count_visible_items).toHaveBeenCalled();
    });

    it('should active_in_topic_array to be null', () => {
        formComponent.records['client_id'].active_in_topic = '0';
        service.initForm(formComponent);
        expect(formComponent.records['client_id'].active_in_topic_array).toBe(null);
    });

    it('should active_in_topic_array to be array', () => {
        formComponent.records['client_id'].active_in_topic = 'test,done';
        service.initForm(formComponent);
        expect(formComponent.records['client_id'].active_in_topic_array.length).toBe(2);
    });

    it('should required_boolean to be true', () => {
        formComponent.records[formComponent.rows[0]].required = 'on';
        service.initForm(formComponent);
        expect(formComponent.records[formComponent.rows[0]].required_boolean).toBe(true);
    });

    it('should text_area_editor_storage to be equal value', () => {
        formComponent.records[formComponent.rows[0]].type = 'textarea_editor';
        const value = formComponent.records[formComponent.rows[0]].value;
        service.initForm(formComponent);
        expect(formComponent.text_area_editor_storage[formComponent.records[formComponent.rows[0]].name]).toEqual(value);
    });

    it('should parameters_storage to be equal value', () => {
        formComponent.records[formComponent.rows[1]].type = 'parameter';
        const value = formComponent.records[formComponent.rows[1]].value;
        service.initForm(formComponent);
        expect(formComponent.parameters_storage[formComponent.records[formComponent.rows[1]].name]).toEqual(value);
    });

    it('should clear_Validators to be called with formControlItem', () => {
        spyOn(service, 'clear_Validators')
        service.initForm(formComponent);
        expect(service.clear_Validators).toHaveBeenCalledWith(service.formControlItem);
    });

    it('should set_Validators to be called with Validators.email', () => {
        spyOn(service, 'set_Validators');
        formComponent.records[formComponent.rows[4]].name = 'email';
        service.initForm(formComponent);
        expect(service.set_Validators).toHaveBeenCalledWith(service.formControlItem, Validators.email);
    });

    it('should init_select_box_options to be called with name', () => {
        spyOn(formComponent, 'init_select_box_options');
        formComponent.records[formComponent.rows[2]].type = 'select_box'
        service.initForm(formComponent);
        expect(formComponent.init_select_box_options).toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name);
    });

    it('should init_geodata to be called with name', () => {
        spyOn(formComponent, 'init_geodata');
        formComponent.records[formComponent.rows[2]].type = 'geodata';
        service.initForm(formComponent);
        expect(formComponent.init_geodata).toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name);
    });

    it('should init_photo_image to be called with name and value', () => {
        spyOn(formComponent, 'init_photo_image');
        formComponent.records[formComponent.rows[2]].type = 'photo';
        service.initForm(formComponent);
        expect(formComponent.init_photo_image).toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name,
            formComponent.records[formComponent.rows[2]].value);
    });

    it('should init_gallery_images to be called with name and value', () => {
        spyOn(formComponent, 'init_gallery_images');
        formComponent.records[formComponent.rows[2]].type = 'uploads';
        service.initForm(formComponent);
        expect(formComponent.init_gallery_images).toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name,
            formComponent.records[formComponent.rows[2]].value);
    });

    it('should hide_dadata to be called with rows', () => {
        spyOn(formComponent, 'hide_dadata');
        formComponent.records[formComponent.rows[2]].parameters = [null];
        formComponent.records[formComponent.rows[2]].parameters.dadata = 1;
        service.initForm(formComponent);
        expect(formComponent.hide_dadata).toHaveBeenCalledWith(formComponent.rows[2]);
    });

    it('should init_select_by_query_options to be called with name and index', () => {
        spyOn(formComponent, 'init_select_by_query_options');
        formComponent.records[formComponent.rows[2]].type = 'select_by_query';
        service.initForm(formComponent);
        expect(formComponent.init_select_by_query_options)
            .toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name, 2);
        formComponent.records[formComponent.rows[2]].type = 'select_by_query_multiple';
        service.initForm(formComponent);
        expect(formComponent.init_select_by_query_options)
            .toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name, 2);
        formComponent.records[formComponent.rows[2]].type = 'select_by_query_multi';
        service.initForm(formComponent);
        expect(formComponent.init_select_by_query_options)
            .toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name, 2);
        formComponent.records[formComponent.rows[2]].type = 'select_box_structure';
        service.initForm(formComponent);
        expect(formComponent.init_select_by_query_options)
            .toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name, 2);
        formComponent.records[formComponent.rows[2]].type = 'select_box_structure_simple_multiple';
        service.initForm(formComponent);
        expect(formComponent.init_select_by_query_options)
            .toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name, 2);
        formComponent.records[formComponent.rows[2]].type = 'select_box_structure_multiple_checkbox';
        service.initForm(formComponent);
        expect(formComponent.init_select_by_query_options)
            .toHaveBeenCalledWith(formComponent.records[formComponent.rows[2]].name, 2);
    });

    it('should hide_row to be called with index', () => {
        spyOn(formComponent, 'hide_row');
        formComponent.entity.set_hidden(formComponent.rows[2]);
        service.initForm(formComponent);
        expect(formComponent.hide_row).toHaveBeenCalledWith(formComponent.rows[2]);
    });

    // if (data.is_hidden(formComponent.rows[i])) {
    //     formComponent.hide_row(formComponent.rows[i]);
});
