import {EndpointService} from './endpoint.service';

describe('EndpointService', () => {
    let service: EndpointService;

    beforeEach(async () => {
        service = new EndpointService();
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

   it('should return path', () => {
        const path = service.get('route');
        expect(path).toBe('dragon/api/route');
    });
});
