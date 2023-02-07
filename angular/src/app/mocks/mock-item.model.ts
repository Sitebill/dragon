import {ApiCall} from '../shared/models/api.model';

export class MockItem {

    action = '';
    active_in_topic= '';
    name = '';
    value = 0;
    value_string = '';
    select_data_indexed = null;
    assign_to = '';
    combo= '';
    dbtype= '';
    entity= '';
    group_id= '';
    group_id_array = [];
    hint = '';
    primary_key = '';
    primary_key_name = '';
    primary_key_table = '';
    primary_key_value = '';
    query = '';
    required = '';
    required_boolean=  false;
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
    multiple =  false;


    constructor(title = '') {
        let apiDetails: ApiCall;
        apiDetails = {
            api: '',
            name: '',
            method: '',
            anonymous: false
        }

            this.action = '';
            this.active_in_topic = '';
            this.name = '';
            this.value = 0;
            this.value_string = '';
            this.select_data_indexed = null;
            this.assign_to = '';
            this.combo = '';
            this.dbtype = '';
            this.entity = '';
            this.group_id = '';
            this.group_id_array = [];
            this.hint = '';
            this.primary_key = '';
            this.primary_key_name = '';
            this.primary_key_table = '';
            this.primary_key_value = '';
            this.query = '';
            this.required = '';
            this.required_boolean = false;
            this.tab = '';
            this.table_name = '';
            this.title = title;
            this.title_default = '';
            this.type = '';
            this.unique = '';
            this.value_default = '';
            this.value_field = '';
            this.value_name = '';
            this.value_primary_key = '';
            this.value_table = '';
            this.columns_id = 0;
            this.table_id = 0;
            this.active = false;
            this.parameters = [];
            this.fxFlex = 0;
            this.api = apiDetails;
            this.hidden = false;
            this.active_in_topic_array = null;
            this.type_native = '';
            this.multiple = false;
        }

    }
