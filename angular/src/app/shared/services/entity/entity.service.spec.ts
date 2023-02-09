import {EntityService} from './entity.service';
import {HttpClient} from "@angular/common/http";
import {EndpointService} from "../endpoint/endpoint.service";
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing';
import {Entity} from '../../models/entity.model';
import {MockHttpClient} from '../../../mocks/mock-http-client';

describe('EntityService', () => {
    let service: EntityService;
    let httpClient: HttpClient;
    let ent: Entity;
    let httpTestingController: HttpTestingController;

    const fakeEndpointService = jasmine.createSpyObj('fakeEndpointService', {
        'get': 'dragon/api/entity'
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {provide: EndpointService, useValue: fakeEndpointService},
                {provide: HttpClient, useClass: MockHttpClient  }
            ]
        })
        service = TestBed.inject(EntityService);
        httpClient = TestBed.inject(HttpClient);
        ent = new Entity();
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch been called with entity', () => {
        spyOn(service, 'fetch' );
        service.fetch(ent);
        expect(service.fetch).toHaveBeenCalledWith(ent);
    });

    it('should httppost been called in fetch', () => {
        spyOn(httpClient, 'post'); // .and.returnValue();
        service.fetch(ent);
        expect(httpClient.post).toHaveBeenCalled();
    });

    it('should httppost been called in fetch_one', () => {
        spyOn(httpClient, 'post');
        service.fetch_one(ent);
        expect(httpClient.post).toHaveBeenCalled();
    });

});
