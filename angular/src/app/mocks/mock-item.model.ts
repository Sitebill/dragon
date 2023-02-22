import {ApiCall} from '../shared/models/api.model';

export class MockItemModel {

    action = '';
    active_in_topic = '';
    name = '';
    value: any = 0;
    value_string = '';
    select_data_indexed = null;
    assign_to = '';
    combo = '';
    dbtype = '';
    entity = '';
    group_id = '';
    group_id_array = [];
    hint = '';
    primary_key = '';
    primary_key_name = '';
    primary_key_table = '';
    primary_key_value = '';
    query = '';
    required = '';
    required_boolean = false;
    tab = '';
    table_name = '';
    title = '';
    title_default = '';
    type = '';
    unique = '';
    value_default = '';
    value_field = '';
    value_name = '';
    value_primary_key = '';
    value_table = '';
    columns_id = 0;  //?
    table_id = 0;
    active = false;
    parameters = [];
    fxFlex = 0;
    api: ApiCall;
    hidden = false;
    active_in_topic_array = null;
    type_native = '';
    multiple = false;


    constructor(item: any = null) {
        let apiDetails: ApiCall;
        apiDetails = {
            api: '',
            name: '',
            method: '',
            anonymous: false
        }
        this.api = apiDetails;

        if (!item) return;
        this.action = item.action;
        this.active_in_topic = item.active_in_topic;
        if (this.active_in_topic) {
            this.active_in_topic_array = item.active_in_topic.split(',');
        };
        this.name = item.name;
        this.value = item.value;
        if (this.name == 'dbtype') {
            this.patchDBType();
        }

        this.value_string = item.value_string;
        this.select_data_indexed = item.select_data_indexed;
        this.assign_to = item.assign_to;
        this.combo = item.combo;

        this.entity = item.entity;
        this.group_id = item.group_id;
        this.group_id_array = item.group_id_array;
        this.hint = item.hint;
        this.primary_key = item.primary_key;
        this.primary_key_name = item.primary_key_name;
        this.primary_key_table = item.primary_key_table;
        this.primary_key_value = item.primary_key_value;
        this.query = item.query;
        this.required = item.required;
        //console.log(item.required_boolean);
        this.required_boolean = item.required_boolean === '1';
        //console.log(this.required_boolean);
        this.tab = item.tab;
        this.table_name = item.table_name;
        this.title = item.title;
        this.title_default = item.title_default;
        this.type = item.type;
        this.type_native = item.type;
        this.multiple =
            item.type === 'select_by_query_multiple' ||
            item.type === 'select_by_query_multi' ||
            item.type === 'select_box_structure_simple_multiple' ||
            item.type === 'select_box_structure_multiple_checkbox';
        this.unique = item.unique;
        this.value_default = item.value_default;
        this.value_field = item.value_field;
        this.value_name = item.value_name;
        this.value_primary_key = item.value_primary_key;
        this.value_table = item.value_table;
        this.columns_id = item.columns_id;
        this.table_id = item.table_id;
        this.active = item.active === '1';
        this.fxFlex = item.fxFlex;
        this.api = item.api;
        this.parameters = item.parameters;
        this.dbtype = '1';
        this.hidden = false;
    }

    patchDBType() {
        if (this.value && (this.value === '0' || this.value === 'notable')) {
            this.value = '0';
        } else {
            this.value = '1';
        }
    }

    getValue() {
        return this.value;
    }

    getValueString() {
        return this.value_string;
    }
}
