import {EntityService} from './entity.service';
import {HttpClient} from "@angular/common/http";
import {EndpointService} from "./endpoint.service";
import {TestBed} from '@angular/core/testing';
import {Entity} from '../models/entity.model';
import {MockHttpClient} from './mock-http-client';

describe('EntityService', () => {
    let service: EntityService;
    let httpClient: HttpClient;
    let entity: Entity;

    const fakeEndpointService = jasmine.createSpyObj('fakeEndpointService', {
        'get': 'dragon/api/entity'
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {provide: EndpointService, useValue: fakeEndpointService},
                {provide: HttpClient, useClass: MockHttpClient  },
            ]
        })
        service = TestBed.inject(EntityService);
        httpClient = TestBed.inject(HttpClient);
        entity = new Entity();
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch been called with entity', () => {
        spyOn(service, 'fetch' );
        service.fetch(entity);
        expect(service.fetch).toHaveBeenCalledWith(entity);
    });

    it('should httppost been called in fetch', () => {
        spyOn(httpClient, 'post'); // .and.returnValue();
        service.fetch(entity);
        expect(httpClient.post).toHaveBeenCalled();
    });

    it('should httppost been called in fetch_one', () => {
        spyOn(httpClient, 'post');
        service.fetch_one(entity);
        expect(httpClient.post).toHaveBeenCalled();
    });
});
