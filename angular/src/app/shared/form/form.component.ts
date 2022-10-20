import {Component, Input, OnInit} from '@angular/core';
import {Entity} from "../models/entity.model";
import {Subject, takeUntil} from "rxjs";
import {EntityService} from "../services/entity.service";
import {FormResponseModel} from "../models/responses/form-response.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {RowItem} from "../models/responses/grid-response.model";
import * as moment from 'moment';
import {EntityItem} from "../models/entity-item.model";

export function forbiddenNullValue(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return control.value == null || control.value == 0 ? {forbiddenNullValue: {value: control.value}} : null;
    };
}

@Component({
    selector: 'dg-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input()
    entity!: Entity;

    form: FormGroup;
    tabs: any;
    // tabs_keys: string[];
    public parameters_storage: { [key: string]: any };
    public text_area_editor_storage: { [key: string]: any };


    protected _unsubscribeAll: Subject<any>;


    constructor(
        private entityService: EntityService,
        protected _formBuilder: FormBuilder,
    ) {
        this._unsubscribeAll = new Subject();
        this.parameters_storage = {};
        this.text_area_editor_storage = {};
        this.form = this._formBuilder.group({});

    }

    ngOnInit(): void {
        this.entityService.fetch_one(this.entity)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result: FormResponseModel) => {
                console.log(result.item);
            });

    }

    init_form() {

        // Сначала нужно получить значение topic_id
        // В цикле, есть есть совпадения с active_in_topic, тогда применяем правила ОБЯЗАТЕЛЬНОСТИ
        // При смене типа в форме, надо перезапускать процесс показа/валидации элементов
        let rows = <string>{};
        let records = <RowItem>{};
        let data = new Entity();


        for (let i = 0; i < rows.length; i++) {
            // console.log(records[rows[i]].type);
            const form_control_item = new FormControl(records[rows[i]].value);
            form_control_item.clearValidators();
            records[rows[i]].required_boolean = false;
            if (data.get_hidden_column_edit(rows[i])) {
                records[rows[i]].hidden = true;
            } else {
                records[rows[i]].hidden = false;
            }
            if (records[rows[i]].active_in_topic != '0' && records[rows[i]].active_in_topic != null) {
                records[rows[i]].active_in_topic_array = records[rows[i]].active_in_topic.split(',');
            } else {
                records[rows[i]].active_in_topic_array = null;
            }

            if (records[rows[i]].required == 'on') {
                if (!records[rows[i]].hidden) {
                    form_control_item.setValidators(forbiddenNullValue());
                    records[rows[i]].required_boolean = true;
                }
            }
            if (records[rows[i]].name == 'email') {
                form_control_item.setValidators(Validators.email);
            }
            // console.log(rows[i]);
            // console.log(form_control_item);

            this.form.addControl(rows[i], form_control_item);

            if (this.is_date_type(records[rows[i]].type) && records[rows[i]].value == 'now') {
                this.form.controls[rows[i]].patchValue(moment());
            }

            if (records[rows[i]].type == 'textarea_editor') {
                this.text_area_editor_storage[records[rows[i]].name] = records[rows[i]].value;
            }

            if (records[rows[i]].type == 'parameter') {
                this.parameters_storage[records[rows[i]].name] = records[rows[i]].value;
            }

            if (
                records[rows[i]].type == 'select_by_query' ||
                records[rows[i]].type == 'select_by_query_multiple' ||
                records[rows[i]].type == 'select_by_query_multi'
            ) {
                this.init_select_by_query_options(records[rows[i]].name, i);
                if (records[rows[i]].value == 0) {
                    this.form.controls[rows[i]].patchValue(null);
                }
            }
            if (
                records[rows[i]].type == 'select_box_structure' ||
                records[rows[i]].type == 'select_box_structure_simple_multiple' ||
                records[rows[i]].type == 'select_box_structure_multiple_checkbox'
            ) {
                this.init_select_by_query_options(records[rows[i]].name, i);
                if (records[rows[i]].value == 0) {
                    this.form.controls[rows[i]].patchValue(null);
                }
            }

            if (records[rows[i]].type == 'date') {
                // this.form.controls[rows[i]].patchValue();
                // console.log(records[rows[i]]);
                if (records[rows[i]].value_string != '' && records[rows[i]].value_string != null) {
                    this.form.controls[rows[i]].patchValue(moment(records[rows[i]].value_string, 'DD.MM.YYYY'));
                } else {
                    this.form.controls[rows[i]].patchValue(null);
                }
            }

            if (records[rows[i]].type == 'dttime') {
                this.form.controls[rows[i]].patchValue(records[rows[i]].value.slice(10, 16));
            }

            if (records[rows[i]].type == 'select_box') {
                this.init_select_box_options(records[rows[i]].name);
                if (records[rows[i]].value_string == '' && records[rows[i]].value == '') {
                    this.form.controls[rows[i]].patchValue(null);
                }

            }


            if (records[rows[i]].type == 'checkbox') {
                if (records[rows[i]].value != 1) {
                    this.form.controls[rows[i]].patchValue(false);
                }
            }

            if (records[rows[i]].type == 'geodata') {
                this.init_geodata(records[rows[i]].name);
            }

            if (records[rows[i]].type == 'photo') {
                this.init_photo_image(records[rows[i]].name, records[rows[i]].value);
            }


            if (records[rows[i]].type == 'uploads') {
                this.init_gallery_images(records[rows[i]].name, records[rows[i]].value);
            }

            if (records[rows[i]].parameters != null) {
                if (records[rows[i]].parameters.dadata == 1) {
                    this.hide_dadata(rows[i]);
                }

            }
            if (data.is_hidden(rows[i])) {
                this.hide_row(rows[i]);
            }
            if (data.get_default_value(rows[i])) {
                records[rows[i]].value = data.get_default_value(rows[i]);
                this.form.controls[rows[i]].patchValue(records[rows[i]].value);
            }

        }

        /*
        this.apply_topic_activity();
        this.form_inited = true;
        this.after_form_inited();
        this.count_visible_items();
         */

    }

    is_date_type(type: string) {
        if (type == 'dtdatetime' || type == 'dtdate' || type == 'dttime' || type == 'date') {
            return true;
        }
        return false;
    }

    init_select_by_query_options(columnName: string, rowIndex = 0) {
        // console.log(this._data.get_default_params());
        this.termsearch = false;
        this.modelService.load_dictionary_model_with_params(this._data.get_table_name(), columnName, this.get_ql_items_from_form(), true)
            // this.modelService.load_dictionary_model_all(this._data.get_table_name(), columnName)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result: any) => {
                if (result) {
                    this.options_storage[columnName] = result.data;
                    this.options_storage_buffer[columnName] = this.options_storage[columnName].slice(0, this.selectBufferSize);

                    if (this.records[this.rows[rowIndex]].multiple && this.records[this.rows[rowIndex]].value) {
                        if (this.records[this.rows[rowIndex]].value === '0') {
                            this.form.controls[this.rows[rowIndex]].patchValue(null);
                        } else {
                            if (!Array.isArray(this.records[this.rows[rowIndex]].value)) {
                                this.form.controls[this.rows[rowIndex]].patchValue(this.records[this.rows[rowIndex]].value.split(','));
                            }
                        }
                    } else {

                        if (this.records[this.rows[rowIndex]].value_string) {
                            this.initial_select_list(this.records[this.rows[rowIndex]].name, this.records[this.rows[rowIndex]].value_string);
                        }
                    }
                }
            });

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
