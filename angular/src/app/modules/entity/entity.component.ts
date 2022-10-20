import {Component, OnInit} from '@angular/core';
import {Entity} from "../../shared/models/entity.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalFormComponent} from "../../shared/modal-wrappers/modal-form/modal-form.component";
import {ModalContractModel} from "../../shared/models/modal-contract.model";

@Component({
    selector: 'app-entity',
    templateUrl: './entity.component.html',
    styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
    public clientEntity: Entity = new Entity;
    public dataEntity: Entity = new Entity;
    public columnsEntity: Entity = new Entity;

    constructor(
        protected dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
        this.clientEntity.table_name = 'client';
        this.clientEntity.app_name = 'client';
        this.clientEntity.primary_key = 'client_id';

        this.dataEntity.table_name = 'data';
        this.dataEntity.app_name = 'data';
        this.dataEntity.primary_key = 'id';

        this.columnsEntity.table_name = 'columns';
        this.columnsEntity.app_name = 'columns';
        this.columnsEntity.primary_key = 'columns_id';

    }

    openModalForm() {
        const dialogConfig = new MatDialogConfig();
        let column = null;
        dialogConfig.data = <ModalContractModel>{entity: this.clientEntity, column: ''};
        this.dialog.open(ModalFormComponent, dialogConfig);
    }
}
