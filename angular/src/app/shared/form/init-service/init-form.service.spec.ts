import {InitFormService} from './init-form.service';
import {FormComponent} from '../form.component';
import {EndpointService} from '../../services/endpoint/endpoint.service';
import {HttpClient} from '@angular/common/http';
import {MockHttpClient} from '../../../mocks/mock-http-client';
import {EntityService} from '../../services/entity/entity.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {Entity} from '../../models/entity.model';
import {MockItemModel} from '../../../mocks/mock-item.model';

describe('InitFormService', () => {
    let service: InitFormService;
    let formComponent: FormComponent;
    let mockEntityItem: any;

    beforeEach(async () => {
        service = new InitFormService();
        formComponent = new FormComponent(
            new EntityService(new MockHttpClient() as HttpClient, new EndpointService()),
            new InitFormService(),
            new FormBuilder()
        );
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
        spyOn(service, 'initForm');
        console.log('SPEC REC VAL-0', formComponent.records['client_id'].value);
        console.log('SPEC CONTR VAL-0', new FormControl(formComponent.records['client_id'].value));
        console.log('SPEC CONTR VAL-0 STAT', new FormControl(formComponent.records['client_id'].value).status);
        // console.log('SPEC-ROWS', formComponent.rows);
        const data = formComponent.entity;
        console.log('BOOL', data.get_hidden_column_edit(formComponent.rows[0])); // false
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

    it('should form_control_item to be value', () => {
        const form_control_item_value = new FormControl(formComponent.records['client_id'].value).value;
        const form_control_item_status = new FormControl(formComponent.records['client_id'].value).status;
        expect(form_control_item_value).toBe(3607);
        expect(form_control_item_status).toBe('VALID');
    });

    it('should form_control_item_validators to be called', () => {
        // service.initForm(formComponent);
        const form_control_item = new FormControl(formComponent.records['client_id'].value);
        spyOn(form_control_item, 'clearValidators')
        form_control_item.clearValidators();
        expect(form_control_item.clearValidators).toHaveBeenCalled();
    });

    it('should formComponent.entity toBeTruthy', () => {
        expect(formComponent.entity).toBeTruthy();
    });

    it('should service.initForm been called', () => {
        service.initForm(formComponent);
        expect(service.initForm).toHaveBeenCalledWith(formComponent);
    });


});
