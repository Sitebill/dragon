import {EntityService} from './entity.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing';
import {Entity} from '../../models/entity.model';

describe('EntityService', () => {
    let service: EntityService;
    let ent: Entity;
    let httpTestingController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        })
        service = TestBed.inject(EntityService);
        ent = new Entity();
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should fetch get data from entity', () => {
        const entity = ['entity'];

        service.fetch(ent)
            .subscribe((response) => expect(response).toEqual(entity));

        const req = httpTestingController.expectOne('dragon/api/entity');

        expect(req.request.method).toBe('POST');

        req.flush(entity);
        httpTestingController.verify()
    });

    it('should fetch get data from entity', () => {
        const id1 = ['id1'];

        service.fetch_one(ent)
            .subscribe((response) => expect(response).toEqual(id1));

        const req = httpTestingController.expectOne('dragon/api/entity/1');

        expect(req.request.method).toBe('POST');

        req.flush(id1);
        httpTestingController.verify()
    });

    afterEach(() => httpTestingController.verify())

});
