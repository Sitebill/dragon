import {ApiCall} from '../shared/models/api.model';

export class MockItem {
    public item: any;

    constructor() {
        let apiDetails: ApiCall;
        apiDetails = {
            api: '',
            name: '',
            method: '',
            anonymous: false
        }
        this.item = {
            action: '',
            active_in_topic: '',
            name: '',
            value: 0,
            value_string: '',
            select_data_indexed: null,
            assign_to: 'string',
            combo: '',
            dbtype: '',
            entity: '',
            group_id: '',
            group_id_array: [],
            hint: '',
            primary_key: '',
            primary_key_name: '',
            primary_key_table: '',
            primary_key_value: '',
            query: '',
            required: '',
            required_boolean: false,
            tab: '',
            table_name: '',
            title: '',
            title_default: '',
            type: '',
            unique: '',
            value_default: '',
            value_field: '',
            value_name: '',
            value_primary_key: '',
            value_table: '',
            columns_id: 0,
            table_id: 0,
            active: false,
            parameters: [],
            fxFlex: 0,
            api: apiDetails,
            hidden: false,
            active_in_topic_array: null,
            type_native: '',
            multiple: false,
        }
    }
}
