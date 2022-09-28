import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})

export class EndpointService {

    public get ( route: string ) {
        return 'https://dragon.sitebill.site/dragon/api/' + route;
    }

}
