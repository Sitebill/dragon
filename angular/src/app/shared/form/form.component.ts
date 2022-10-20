import {Component, Input, OnInit} from '@angular/core';
import {Entity} from "../models/entity.model";

@Component({
    selector: 'dg-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input()
    entity!: Entity;

    constructor() {
    }

    ngOnInit(): void {
    }

}
