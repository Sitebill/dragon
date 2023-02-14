import {Component, OnInit} from '@angular/core';
import {Entity} from "../../shared/models/entity.model";

@Component({
    selector: 'app-test-form',
    templateUrl: './test-form.component.html',
    styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
    public clientEntity: Entity = new Entity;

    constructor() {
    }

    ngOnInit(): void {
        // console.log('test form');
        this.clientEntity.table_name = 'client';
        this.clientEntity.app_name = 'client';
        this.clientEntity.primary_key = 'client_id';

    }

}
