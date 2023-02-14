import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {forbiddenNullValue, FormComponent} from '../form.component';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root',
})

export class InitFormService {

    initForm(formComponent: FormComponent): void {
        // Сначала нужно получить значение topic_id
        // В цикле, есть есть совпадения с active_in_topic, тогда применяем правила ОБЯЗАТЕЛЬНОСТИ
        // При смене типа в форме, надо перезапускать процесс показа/валидации элементов
        let data = formComponent.entity;
        // console.log('DATA', data);
        console.log('REC VAL-0', formComponent.rows[0]);
        console.log('REC VAL-1', formComponent.records[formComponent.rows[1]]);
        console.log('REC VAL-2', formComponent.records[formComponent.rows[2]]);
        console.log('CONTR VAL-0', new FormControl(formComponent.records['client_id'].value).value);
        console.log('CONTR VAL-1', new FormControl(formComponent.records[formComponent.rows[1]].value).status);
        console.log('CONTR VAL-2', new FormControl(formComponent.records[formComponent.rows[2]].value));

        for (let i = 0; i < formComponent.rows.length; i++) {
            // console.log(this.records[this.rows[i]].type);
            const form_control_item = new FormControl(formComponent.records[formComponent.rows[i]].value);
            form_control_item.clearValidators();
            formComponent.records[formComponent.rows[i]].required_boolean = false;
            if (data.get_hidden_column_edit(formComponent.rows[i])) {
                formComponent.records[formComponent.rows[i]].hidden = true;
            } else {
                formComponent.records[formComponent.rows[i]].hidden = false;
            }
            if (formComponent.records[formComponent.rows[i]].active_in_topic != '0' &&
                formComponent.records[formComponent.rows[i]].active_in_topic != null) {
                formComponent.records[formComponent.rows[i]].active_in_topic_array =
                    formComponent.records[formComponent.rows[i]].active_in_topic.split(',');
            } else {
                formComponent.records[formComponent.rows[i]].active_in_topic_array = null;
            }

            if (formComponent.records[formComponent.rows[i]].required == 'on') {
                if (!formComponent.records[formComponent.rows[i]].hidden) {
                    form_control_item.setValidators(forbiddenNullValue());
                    formComponent.records[formComponent.rows[i]].required_boolean = true;
                }
            }
            if (formComponent.records[formComponent.rows[i]].name == 'email') {
                form_control_item.setValidators(Validators.email);
            }
            /*

             console.log(this.rows[i]);
             console.log(form_control_item);
             console.log(i);

             */
            formComponent.form.addControl(formComponent.rows[i], form_control_item);

            if (formComponent.is_date_type(formComponent.records[formComponent.rows[i]].type) &&
                formComponent.records[formComponent.rows[i]].value == 'now') {
                formComponent.form.controls[formComponent.rows[i]].patchValue(moment());
            }

            if (formComponent.records[formComponent.rows[i]].type == 'textarea_editor') {
                formComponent.text_area_editor_storage[formComponent.records[formComponent.rows[i]].name] =
                    formComponent.records[formComponent.rows[i]].value;
            }

            if (formComponent.records[formComponent.rows[i]].type == 'parameter') {
                formComponent.parameters_storage[formComponent.records[formComponent.rows[i]].name] =
                    formComponent.records[formComponent.rows[i]].value;
            }

            if (
                formComponent.records[formComponent.rows[i]].type == 'select_by_query' ||
                formComponent.records[formComponent.rows[i]].type == 'select_by_query_multiple' ||
                formComponent.records[formComponent.rows[i]].type == 'select_by_query_multi'
            ) {
                formComponent.init_select_by_query_options(formComponent.records[formComponent.rows[i]].name, i);
                if (formComponent.records[formComponent.rows[i]].value == 0) {
                    formComponent.form.controls[formComponent.rows[i]].patchValue(null);
                }
            }
            if (
                formComponent.records[formComponent.rows[i]].type == 'select_box_structure' ||
                formComponent.records[formComponent.rows[i]].type == 'select_box_structure_simple_multiple' ||
                formComponent.records[formComponent.rows[i]].type == 'select_box_structure_multiple_checkbox'
            ) {
                formComponent.init_select_by_query_options(formComponent.records[formComponent.rows[i]].name, i);
                if (formComponent.records[formComponent.rows[i]].value == 0) {
                    formComponent.form.controls[formComponent.rows[i]].patchValue(null);
                }
            }

            if (formComponent.records[formComponent.rows[i]].type == 'date') {
                // this.form.controls[this.rows[i]].patchValue();
                // console.log(this.records[this.rows[i]]);
                if (formComponent.records[formComponent.rows[i]].value_string != '' &&
                    formComponent.records[formComponent.rows[i]].value_string != null) {
                    formComponent.form.controls[formComponent.rows[i]].patchValue(
                        moment(formComponent.records[formComponent.rows[i]].value_string, 'DD.MM.YYYY'));
                } else {
                    formComponent.form.controls[formComponent.rows[i]].patchValue(null);
                }
            }

            if (formComponent.records[formComponent.rows[i]].type == 'dttime') {
                formComponent.form.controls[formComponent.rows[i]].patchValue(
                    formComponent.records[formComponent.rows[i]].value.slice(10, 16));
            }

            if (formComponent.records[formComponent.rows[i]].type == 'select_box') {
                formComponent.init_select_box_options(formComponent.records[formComponent.rows[i]].name);
                if (formComponent.records[formComponent.rows[i]].value_string == '' &&
                    formComponent.records[formComponent.rows[i]].value == '') {
                    formComponent.form.controls[formComponent.rows[i]].patchValue(null);
                }

            }


            if (formComponent.records[formComponent.rows[i]].type == 'checkbox') {
                if (formComponent.records[formComponent.rows[i]].value != 1) {
                    formComponent.form.controls[formComponent.rows[i]].patchValue(false);
                }
            }

            if (formComponent.records[formComponent.rows[i]].type == 'geodata') {
                formComponent.init_geodata(formComponent.records[formComponent.rows[i]].name);
            }

            if (formComponent.records[formComponent.rows[i]].type == 'photo') {
                formComponent.init_photo_image(formComponent.records[formComponent.rows[i]].name,
                    formComponent.records[formComponent.rows[i]].value);
            }


            if (formComponent.records[formComponent.rows[i]].type == 'uploads') {
                formComponent.init_gallery_images(formComponent.records[formComponent.rows[i]].name,
                    formComponent.records[formComponent.rows[i]].value);
            }

            if (formComponent.records[formComponent.rows[i]].parameters != null) {
                if (formComponent.records[formComponent.rows[i]].parameters.dadata == 1) {
                    formComponent.hide_dadata(formComponent.rows[i]);
                }

            }
            if (data.is_hidden(formComponent.rows[i])) {
                formComponent.hide_row(formComponent.rows[i]);
            }
            if (data.get_default_value(formComponent.rows[i])) {
                formComponent.records[formComponent.rows[i]].value = data.get_default_value(formComponent.rows[i]);
                formComponent.form.controls[formComponent.rows[i]].patchValue(
                    formComponent.records[formComponent.rows[i]].value);
            }
        }
        /*

         console.log('records', this.records);
         console.log('controls', this.form.controls);
         console.log(this.tabs);
         console.log(this.tabs_keys);
         console.log('lets go');

         */
        formComponent.form_inited = true;
        formComponent.count_visible_items();
        /*
         this.apply_topic_activity();
         this.after_form_inited();
         */

    }

}
