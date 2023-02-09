import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})

export class EndpointService {

    firstRout = 'dragon/api/';
    // 'http://food/dragon/api/'
    // 'https://dragon.sitebill.site/dragon/api/';

    public get ( route: string ) {
        return this.firstRout + route;

    }

}
