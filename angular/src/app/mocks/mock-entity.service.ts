import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Entity} from '../shared/models/entity.model';
import {RowItem} from '../shared/models/responses/grid-response.model';
import {EntityItem} from '../shared/models/entity-item.model';
import {MockItemModel} from './mock-item.model';

@Injectable()
export class MockEntityService {

    item: any;

    constructor() {
        this.item = new MockItemModel();
    }

    public mockRow():RowItem {
        return { row: new EntityItem(this.item)}
    };

    fetch(entity: Entity): Observable<any> {
        return of({rows: [this.mockRow()]});
    }
    fetch_one(entity: Entity): Observable<any> { // > refactor
        return of({rows: [this.mockRow()]});
    }
}
