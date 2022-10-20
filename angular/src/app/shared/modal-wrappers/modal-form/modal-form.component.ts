import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ModalContractModel} from "../../models/modal-contract.model";

@Component({
  selector: 'dg-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  constructor(
      @Inject(MAT_DIALOG_DATA) public _data: ModalContractModel
  ) { }

  ngOnInit(): void {
  }

}
