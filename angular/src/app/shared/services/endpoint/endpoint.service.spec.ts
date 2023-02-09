import {EndpointService} from './endpoint.service';

describe('EndpointService', () => {
    let service: EndpointService;

    beforeEach(async () => {
        service = new EndpointService();
    });

    it('should create class', () => {
        expect(service).toBeTruthy();
    });

    it('should service.get been called', () => {
        spyOn(service, 'get');
        service.get('route');
        expect(service.get).toHaveBeenCalledWith('route');
    });

    it('should return path', () => {
        const path = service.get('route');
        console.log(path);
        expect(path).toBe(service.firstRout + 'route');
    });
});
