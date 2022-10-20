import {Component, Input, OnInit} from '@angular/core';
import {Entity} from "../models/entity.model";
import {Subject, takeUntil} from "rxjs";
import {EntityService} from "../services/entity.service";
import {FormResponseModel} from "../models/responses/form-response.model";

@Component({
    selector: 'dg-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input()
    entity!: Entity;

    protected _unsubscribeAll: Subject<any>;


    constructor(
        private entityService: EntityService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.entityService.fetch_one(this.entity)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result: FormResponseModel) => {
                console.log(result.item);
            });

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
