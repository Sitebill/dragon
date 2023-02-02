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
       console.log('E');
        const path = service.get('route');
        console.log(path);
        expect(path).toBe('dragon/api/route');
    });
});
