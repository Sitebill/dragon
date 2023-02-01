import {EntityService} from './entity.service';
import {HttpClient} from "@angular/common/http";
import {EndpointService} from "./endpoint.service";
import {TestBed} from '@angular/core/testing';
import {Entity} from '../models/entity.model';

describe('EntityService', () => {
    let service: EntityService;

    const fakeEndpointService = jasmine.createSpyObj('fakeEndpointService', ['get']);
    const fakeHttp = jasmine.createSpyObj('fakeHttp', ['post']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {provide: EndpointService, useValue: fakeEndpointService},
                {provide: HttpClient, useValue: fakeHttp},
            ]
        })
        service = new EntityService(fakeEndpointService, fakeHttp);
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

    xit('should fetch been called', () => {
        service.fetch_one(new Entity());
        expect(fakeHttp.post).toHaveBeenCalled();
    });
});
