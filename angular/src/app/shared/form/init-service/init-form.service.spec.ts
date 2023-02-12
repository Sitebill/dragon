import {InitFormService} from './init-form.service';
import {FormComponent} from '../form.component';
import {EndpointService} from '../../services/endpoint/endpoint.service';
import {HttpClient} from '@angular/common/http';
import {MockHttpClient} from '../../../mocks/mock-http-client';
import {EntityService} from '../../services/entity/entity.service';
import {FormBuilder} from '@angular/forms';
import {Entity} from '../../models/entity.model';

describe('InitFormService', () => {
    let service: InitFormService;
    let formComponent: FormComponent;

    beforeEach(async () => {
        service = new InitFormService();
        formComponent = new FormComponent(
            new EntityService( new MockHttpClient() as HttpClient, new EndpointService()),
            new InitFormService(),
            new FormBuilder()
        );
        formComponent.entity = new Entity();
        console.log(formComponent.rows);
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

    it('should service.initForm been called', () => {
        spyOn(service, 'initForm');
        service.initForm(formComponent);
        expect(service.initForm).toHaveBeenCalled();
    });

    it('should formComponent.entity toBeTruthy', () => {
        expect(formComponent.entity).toBeTruthy();
    });


});
