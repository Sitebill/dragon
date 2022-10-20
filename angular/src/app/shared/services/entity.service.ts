import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entity} from "../models/entity.model";
import {EndpointService} from "./endpoint.service";

@Injectable({
    providedIn: 'root',
})

export class EntityService {
    constructor(
        private http: HttpClient,
        private endpointService: EndpointService
    ) {}

    fetch(entity: Entity): Observable<any> {
        return this.http.post(this.endpointService.get('entity'), entity);
    }
    fetch_one(entity: Entity): Observable<any> {
        let id = '1';
        return this.http.post(this.endpointService.get('entity/' + id), entity);
    }

}
