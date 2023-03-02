import {Component, Input, OnInit} from '@angular/core';
import {Entity} from "../models/entity.model";
import {Subject, takeUntil} from "rxjs";
import {EntityService} from "../services/entity/entity.service";
import {FormResponseModel} from "../models/responses/form-response.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {RowItem} from "../models/responses/grid-response.model";
import * as moment from 'moment';
import {EntityItem} from "../models/entity-item.model";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {FormType} from "../models/api.model";
import {MatFormFieldAppearance} from "@angular/material/form-field";

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

    @Input()
    disable_form_title_bar!: boolean;

    @Input()
    disable_mat_dialog_content_tag!: boolean;

    @Input()
    disable_save_button!: boolean;

    @Input()
    disable_cancel_button!: boolean;

    @Input()
    disable_delete!: boolean;

    @Input('column_mode')
    column_mode!: number;

    form: FormGroup;

    tabs: any;
    tabs_keys:string[] = [];
    records = <RowItem>{};
    rows:string[] = [];
    form_inited = false;

    // tabs_keys: string[];
    public parameters_storage: { [key: string]: any };
    public text_area_editor_storage: { [key: string]: any };
    public error_message = null;
    public form_submitted = false;
    public options_storage: { [key: string]: any };
    public options_storage_buffer: { [key: string]: any };
    public loading = false;
    private selectBufferSize = 100;
    private numberOfItemsFromEndBeforeFetchingMore = 10;
    input$ = new Subject<string>();

    private termsearch = false;

    lat: any;
    lng: any;
    lat_center: any;
    lng_center: any;


    protected _unsubscribeAll: Subject<any>;
    private comment_open = false;
    private visible_items_counter: number = 0;
    private numberOfColumns = 3;

    constructor(
        private entityService: EntityService,
        protected _formBuilder: FormBuilder,
    ) {
        this._unsubscribeAll = new Subject();
        this.parameters_storage = {};
        this.options_storage = {};
        this.options_storage_buffer = {};

        this.text_area_editor_storage = {};
        this.form = this._formBuilder.group({});
        // console.log('FORM in constr', this.form );
    }

    ngOnInit(): void {
        // console.log('ENT', this.entity);
        this.entityService.fetch_one(this.entity)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((result: FormResponseModel) => {
                this.records = result.item;
                // console.log('FORM RES', result);
                // console.log("KEYS", Object.keys(this.records));

                for (const [key_obj, value_obj] of Object.entries(result.item)) {
                    try {
                        this.records[key_obj] = new EntityItem(value_obj);
                    } catch (e) {
                        console.log('delete', key_obj);
                        delete this.records[key_obj];
                    }
                }

                this.entity.model = this.records;
                this.tabs = result.tabs;
                this.tabs_keys = Object.keys(result.tabs);

                this.rows = Object.keys(result.item);

                // console.log('REC', this.records);
                // this.initFormService.initForm(this);
                this.init_form()
/*
                        this._data.model = this.records;
                        // console.log(this.records);

                        this.rows = Object.keys(result.data);
*/
            });
    }

    init_form() {
        // Сначала нужно получить значение topic_id
        // В цикле, есть есть совпадения с active_in_topic, тогда применяем правила ОБЯЗАТЕЛЬНОСТИ
        // При смене типа в форме, надо перезапускать процесс показа/валидации элементов
        let data = this.entity;

        // console.log('START-REC', this.records);
        const controlValues = [];
        for (const [key_obj, value_obj] of Object.entries(this.form.controls)) {
            const value = value_obj.value;
            controlValues.push(value);
        }
        // console.log('START-FORM', controlValues);

        for (let i = 0; i < this.rows.length; i++) {
            // console.log(this.records[this.rows[i]].type);
            const form_control_item = new FormControl(this.records[this.rows[i]].value);
            form_control_item.clearValidators();
            this.records[this.rows[i]].required_boolean = false;
            if (data.get_hidden_column_edit(this.rows[i])) {
                this.records[this.rows[i]].hidden = true;
            } else {
                this.records[this.rows[i]].hidden = false;
            }
            if (this.records[this.rows[i]].active_in_topic != '0' && this.records[this.rows[i]].active_in_topic != null) {
                this.records[this.rows[i]].active_in_topic_array = this.records[this.rows[i]].active_in_topic.split(',');
            } else {
                this.records[this.rows[i]].active_in_topic_array = null;
            }

            if (this.records[this.rows[i]].required == 'on') {
                if (!this.records[this.rows[i]].hidden) {
                    form_control_item.setValidators(forbiddenNullValue());
                    this.records[this.rows[i]].required_boolean = true;
                }
            }
            if (this.records[this.rows[i]].name == 'email') {
                form_control_item.setValidators(Validators.email);
            }
            /*
                        console.log(this.rows[i]);
                        console.log(form_control_item);
                        console.log(i);
            */
            this.form.addControl(this.rows[i], form_control_item);

            if (this.is_date_type(this.records[this.rows[i]].type) && this.records[this.rows[i]].value == 'now') {
                this.form.controls[this.rows[i]].patchValue(moment());
            }

            if (this.records[this.rows[i]].type == 'textarea_editor') {
                this.text_area_editor_storage[this.records[this.rows[i]].name] = this.records[this.rows[i]].value;
            }

            if (this.records[this.rows[i]].type == 'parameter') {
                this.parameters_storage[this.records[this.rows[i]].name] = this.records[this.rows[i]].value;
            }

            if (
                this.records[this.rows[i]].type == 'select_by_query' ||
                this.records[this.rows[i]].type == 'select_by_query_multiple' ||
                this.records[this.rows[i]].type == 'select_by_query_multi'
            ) {
                this.init_select_by_query_options(this.records[this.rows[i]].name, i);
                if (this.records[this.rows[i]].value == 0) {
                    this.form.controls[this.rows[i]].patchValue(null);
                }
            }
            if (
                this.records[this.rows[i]].type == 'select_box_structure' ||
                this.records[this.rows[i]].type == 'select_box_structure_simple_multiple' ||
                this.records[this.rows[i]].type == 'select_box_structure_multiple_checkbox'
            ) {
                this.init_select_by_query_options(this.records[this.rows[i]].name, i);
                if (this.records[this.rows[i]].value == 0) {
                    this.form.controls[this.rows[i]].patchValue(null);
                }
            }

            if (this.records[this.rows[i]].type == 'date') {
                // this.form.controls[this.rows[i]].patchValue();
                // console.log(this.records[this.rows[i]]);
                if (this.records[this.rows[i]].value_string != '' && this.records[this.rows[i]].value_string != null) {
                    this.form.controls[this.rows[i]].patchValue(moment(this.records[this.rows[i]].value_string, 'DD.MM.YYYY'));
                } else {
                    this.form.controls[this.rows[i]].patchValue(null);
                }
            }

            if (this.records[this.rows[i]].type == 'dttime') {
                this.form.controls[this.rows[i]].patchValue(this.records[this.rows[i]].value.slice(10, 16));
            }

            if (this.records[this.rows[i]].type == 'select_box') {
                this.init_select_box_options(this.records[this.rows[i]].name);
                if (this.records[this.rows[i]].value_string == '' && this.records[this.rows[i]].value == '') {
                    this.form.controls[this.rows[i]].patchValue(null);
                }
            }

            if (this.records[this.rows[i]].type == 'checkbox') {
                if (this.records[this.rows[i]].value != 1) {
                    this.form.controls[this.rows[i]].patchValue(false);
                }
            }

            if (this.records[this.rows[i]].type == 'geodata') {
                this.init_geodata(this.records[this.rows[i]].name);
            }

            if (this.records[this.rows[i]].type == 'photo') {
                this.init_photo_image(this.records[this.rows[i]].name, this.records[this.rows[i]].value);
            }


            if (this.records[this.rows[i]].type == 'uploads') {
                this.init_gallery_images(this.records[this.rows[i]].name, this.records[this.rows[i]].value);
            }

            if (this.records[this.rows[i]].parameters != null) {
                if (this.records[this.rows[i]].parameters.dadata == 1) {
                    this.hide_dadata(this.rows[i]);
                }

            }
            if (data.is_hidden(this.rows[i])) {
                this.hide_row(this.rows[i]);
            }
            if (data.get_default_value(this.rows[i])) {
                this.records[this.rows[i]].value = data.get_default_value(this.rows[i]);
                this.form.controls[this.rows[i]].patchValue(this.records[this.rows[i]].value);
            }
        }
        /*
                console.log('records', this.records);
                console.log('controls', this.form.controls);
                console.log(this.tabs);
                console.log(this.tabs_keys);
                console.log('lets go');
        */

        // console.log('END-REC', this.records);
        const controlValuesEnd = [];
        for (const [key_obj, value_obj] of Object.entries(this.form.controls)) {
            const value = value_obj.value;
            controlValuesEnd.push(value);
        }
        // console.log('END-FORM', controlValuesEnd);

        this.form_inited = true;
        this.count_visible_items();
        /*
        this.apply_topic_activity();
        this.after_form_inited();
         */
    }

    hide_dadata(row: string) {
        this.hide_row(row);
    }

    hide_row(row: string) {
        this.records[row].hidden = true;
        this.records[row].type = 'hidden';
    }


    is_date_type(type: string) {
        if (type == 'dtdatetime' || type == 'dtdate' || type == 'dttime' || type == 'date') {
            return true;
        }
        return false;
    }

    init_gallery_images(field_name: string, images: []) {

/*
        this.galleryImages[field_name] = {};
        const self = this;
        if (images) {
            this.galleryImages[field_name] = images.map(function(image: any) {
                if (image.remote === 'true') {
                    return {
                        small: image.preview + '?' + new Date().getTime(),
                        medium: image.normal + '?' + new Date().getTime(),
                        big: image.normal + '?' + new Date().getTime()
                    };
                } else {
                    return {
                        small: self.api_url + '/img/data/' + image.preview + '?' + new Date().getTime(),
                        medium: self.api_url + '/img/data/' + image.normal + '?' + new Date().getTime(),
                        big: self.api_url + '/img/data/' + image.normal + '?' + new Date().getTime()
                    };
                }
            });
        } else {
            this.galleryImages[field_name] = [];
        }
        // console.log(this.galleryImages[field_name]);
*/
    }


    init_photo_image(field_name: string, image: string) {
        //@todo: реализовать!
/*
        this.galleryImages[field_name] = [];
        const self = this;
        if (image != '') {
            const item = {
                small: self.api_url + '/img/data/user/' + image + '?' + new Date().getTime(),
                medium: self.api_url + '/img/data/user/' + image + '?' + new Date().getTime(),
                big: self.api_url + '/img/data/user/' + image + '?' + new Date().getTime()
            };
            this.galleryImages[field_name][0] = item;
        } else {
            this.galleryImages[field_name] = [];
        }
*/
    }


    init_geodata(columnName: string) {
        //@todo: реализовать!
/*
        try {
            // console.log(parseFloat(this.records[columnName].value.lat));
            if (parseFloat(this.records[columnName].value.lat)) {
                this.lat = parseFloat(this.records[columnName].value.lat);
                this.lat_center = this.lat;
            } else {
                this.lat = '';
            }
            if (parseFloat(this.records[columnName].value.lng)) {
                this.lng = parseFloat(this.records[columnName].value.lng);
                this.lng_center = this.lng;
            } else {
                this.lng = '';
            }
        } catch {
        }
*/
    }

    init_select_box_options(columnName: string) {
        //@todo: реализовать!
/*

        if ( this.records[columnName].api ) {
            this.modelService.api_call(this.records[columnName].api)
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((result: SitebillResponse) => {
                    this.options_storage[columnName] = result.data;
                });
        } else {
            this.options_storage[columnName] = this.records[columnName].select_data_indexed;
            try {
                this.options_storage[columnName].forEach((row, index) => {
                    row.id = row.id.toString();
                    row.value = row.value.toString();
                });
            } catch {
            }
        }
*/
    }


    init_select_by_query_options(columnName: string, rowIndex = 0) {
        //@todo: реализовать!
/*
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
*/
    }

    onCommentToggle(comment_open: boolean) {
        this.comment_open = comment_open;
    }

    getCommentHeightFix() {
        if ( this.comment_open ) {
            return 'comment-on-height-fix';
        }
        return 'comment-off-height-fix';
    }

    getCommentOpen(): boolean {
        return this.comment_open;
    }

    save() {

    }


    close() {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
        // this.dialogRef.close();
    }

    delete() {

    }


    setNumberOfColumns(n: number): void {
        //@todo: реализовать!
/*
        this.numberOfColumns = n;
        this.storageService.setItem('numberOfColumns', String(n));
*/
    }

    get_flex_padding( size: string, form_type: string, record: EntityItem ) {
        if ( record.type == 'hidden' || record.hidden == true ) {
            return '';
        }
        let css_class = 'p-12';
        if ( record.fxFlex ) {
            css_class += ' border-top-1px';
        }
        return css_class;
    }

    get_flex_width( size: string, form_type: string, record: EntityItem ) {
        // console.log(record);
        if ( record.type == 'hidden' || record.hidden == true ) {
            return 0;
        }
        const width_100: Array<string> = [
            'uploads',
            'textarea',
            'textarea_editor',
            'injector',
            'photo',
            'geodata'
        ];
        if ( width_100.indexOf(record.type) > -1 ) {
            return 100;
        }
        if (record.parameters && record.parameters['fxFlex']) {
            return record.parameters['fxFlex'];
        }

        if (record.fxFlex) {
            return record.fxFlex;
        }
        if (this.column_mode) {
            return this.column_mode;
        }
        if (this.get_visible_items_counter() === 1) {
            return 'auto';
        }
        if (form_type == FormType.inline) {
            return 100;
        }
        if (this.numberOfColumns === 1) { // should be tested when setNumberOfColumns will be realised
            return 100;
        } else if (this.numberOfColumns === 2) { // should be tested when setNumberOfColumns will be realised
            if (size == 'xs') {
                return 100;
            } else {
                return 50;
            }
        } else {
            if (size == 'lg') {
                return 33;
            }
            if (size == 'xl') {
                return 20;
            }
            if (size == 'md') {
                return 50;
            }
            if (size == 'xs') {
                return 100;
            }

            return 'auto';
        }
    }

    count_visible_items() {
        this.visible_items_counter = 0;
        for (let i = 0; i < this.rows.length; i++) {
            if ( !this.records[this.rows[i]].hidden && this.records[this.rows[i]].type !== 'hidden') {
                this.visible_items_counter ++;
            }
        }
    }

    get_visible_items_counter() {
        return this.visible_items_counter;
    }

    appearance: {
        legacy: MatFormFieldAppearance;
        standard: MatFormFieldAppearance;
        fill: MatFormFieldAppearance;
        outline: MatFormFieldAppearance;
    } = { legacy: 'legacy', standard: 'standard', fill: 'fill', outline: 'outline' };

    get_appearance(): MatFormFieldAppearance {
        // 'legacy' | 'standard' | 'fill' | 'outline'
        // outline,standard,fill,legacy
        // return MatFormFieldAppearance.;
        return this.appearance.outline;
    }

    apply_topic_activity() {
        let current_topic_id = 0;
        if (this.form.controls['topic_id'] != null) {
            if ( this.form.controls['topic_id'].value != null ) {
                current_topic_id = this.form.controls['topic_id'].value;
            }
        }

        if (current_topic_id != null) {
            for (let i = 0; i < this.rows.length; i++) {
                if (
                    this.records[this.rows[i]].active_in_topic != '0' &&
                    this.records[this.rows[i]].active_in_topic != null
                ) {
                    let item = this.form.get(this.rows[i]);

                    if (
                        Array.isArray(this.records[this.rows[i]].active_in_topic_array) &&
                        this.records[this.rows[i]].active_in_topic_array.indexOf(current_topic_id.toString()) == -1
                    ) {
                        if ( item !== null ) {
                            item.clearValidators();
                            item.updateValueAndValidity();
                        }
                        this.records[this.rows[i]].required_boolean = false;
                        this.records[this.rows[i]].hidden = true;
                    } else {
                        this.records[this.rows[i]].hidden = false;
                        if (this.records[this.rows[i]].required == 'on') {
                            this.records[this.rows[i]].required_boolean = true;
                            if ( item !== null ) {
                                item.setValidators(forbiddenNullValue());
                                item.updateValueAndValidity();
                            }
                        }
                    }
                }
                if (this.records[this.rows[i]].parameters != null) {
                    if (this.records[this.rows[i]].parameters.dadata == 1) {
                        this.hide_dadata(this.rows[i]);
                    }
                }
                if (this.records[this.rows[i]].type === 'compose') {
                    this.hide_dadata(this.rows[i]);
                }

            }
        }
    }

    onScrollToEnd(columnName: string) {
        this.fetchMore(columnName);
    }

    onScroll(event: any, columnName: string) {
        // @todo: end нужно определить правильно (смотрим старый проект)
        let end = event;
        if ( !this.options_storage[columnName] || !this.options_storage_buffer[columnName]) {
            return;
        }
        if (this.loading || this.options_storage[columnName].length <= this.options_storage_buffer[columnName].length) {
            return;
        }

        if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.options_storage_buffer[columnName].length) {
            this.fetchMore(columnName);
        }
    }

    onSearch(columnName: string) {
        this.input$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => {
                this.options_storage_buffer[columnName] = this.options_storage[columnName]
                    .filter((item: { value: string | string[]; }) => item.value.includes(term))
                    .slice(0, this.selectBufferSize);

                this.termsearch = true;
            }),
            // map(term => this.options_storage[columnName].filter((x: { title: string }) => x.title.includes(term)))
        ).subscribe(data => {
            // this.options_storage_buffer[columnName] = data.slice(0, this.selectBufferSize);
        });
    }


    private fetchMore(columnName: string) {
        if ( this.termsearch ) {
            return;
        }
        const len = this.options_storage_buffer[columnName].length;
        const more = this.options_storage[columnName].slice(len, this.selectBufferSize + len);
        this.loading = true;
        // using timeout here to simulate backend API delay
        setTimeout(() => {
            this.loading = false;
            this.options_storage_buffer[columnName] = this.options_storage_buffer[columnName].concat(more);
        }, 200);
    }


    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
