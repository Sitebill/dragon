import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-form',
    templateUrl: './test-form.component.html',
    styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        console.log('test form');
    }

}
