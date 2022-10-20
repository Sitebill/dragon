import {EntityItem} from "./entity-item.model";
import {FormType} from "./api.model";

export class Entity {
    public app_name: string;
    public table_name: string;
    primary_key: string;
    key_value: number;
    columns: string[];
    columns_index: any[];
    default_columns_list: string[];
    default_params: string[];
    private hidden_edit_columns: string[];
    model: { [key: string]: EntityItem };
    private enable_collections: boolean;
    private hook: string;
    private readonly: boolean;
    private enable_comment: boolean;
    private app_url: string;
    private app_session_key: string;
    private title: string;
    private form_type: string;
    private ql_items: any;
    private params: { [key: string]: any };
    private hidden_items: { [key: string]: boolean };
    private default_values: { [key: string]: any };
    private delete_disabled = false;

    constructor() {
        this.app_name = '';
        this.table_name = '';
        this.primary_key = '';
        this.key_value = 0;
        this.columns = [];
        this.model = {};
        this.columns_index = [];
        this.default_columns_list = [];
        this.default_params = [];
        this.hidden_edit_columns = [];
        this.enable_collections = false;
        this.hook = '';
        this.readonly = false;
        this.enable_comment = true;
        this.app_url = '';
        this.app_session_key = '';
        this.title = '';
        this.form_type = FormType.simple;
        this.params = {};
        this.hidden_items = {};
        this.default_values = {};
    }

    get_app_name() {
        return this.app_name;
    }

    set_app_name(app_name: string) {
        this.app_name = app_name;
    }

    get_default_params() {
        return this.default_params;
    }

    set_default_params(default_params: []) {
        this.default_params = default_params;
    }

    set_default_columns_list(default_columns_list: []) {
        this.default_columns_list = default_columns_list;
    }

    get_default_columns_list() {
        return this.default_columns_list;
    }

    get_table_name() {
        return this.table_name;
    }

    set_table_name(table_name: string) {
        this.table_name = table_name;
    }

    add_column(name: string) {
        this.columns.push(name);
    }

    get_key_value() {
        return this.key_value;
    }

    get_primary_key() {
        return this.primary_key;
    }

    set_primary_key(name: string) {
        this.primary_key = name;
    }

    set_enable_comment() {
        this.enable_comment = true;
    }

    set_disable_comment() {
        this.enable_comment = false;
    }

    is_enable_comment() {
        return this.enable_comment;
    }


    set_enable_collections() {
        this.enable_collections = true;
    }

    set_disable_collections() {
        this.enable_collections = false;
    }

    is_enable_collections() {
        return this.enable_collections;
    }

    set_key_value(key_value: any) {
        this.key_value = key_value;
    }

    get_hook() {
        return this.hook;
    }

    set_hook(hook: string) {
        this.hook = hook;
    }

    get_ql_items() {
        return this.ql_items;
    }

    set_ql_items(ql_items: any) {
        this.ql_items = ql_items;
    }

    get_param(key: string) {
        return this.params[key];
    }

    set_param(key: string, value: string) {
        this.params[key] = value;
    }


    get_readonly() {
        return this.readonly;
    }

    set_readonly(readonly: boolean) {
        this.readonly = readonly;
    }

    hide_column_edit(column_name: string) {
        this.hidden_edit_columns.push(column_name);
    }

    get_hidden_column_edit(column_name: string) {
        if (this.hidden_edit_columns.indexOf(column_name) !== -1) {
            return true;
        }
        return false;
    }

    get_app_url() {
        try {
            if (this.app_url !== undefined && this.app_url != null) {
                return this.app_url;
            }
        } catch (e) {

        }
        return null;
    }

    set_app_url(app_url: string) {
        this.app_url = app_url;
    }

    get_app_session_key() {
        try {
            if (this.app_session_key !== undefined && this.app_session_key != null) {
                return this.app_session_key;
            }
        } catch (e) {

        }
        return null;
    }

    set_app_session_key(app_session_key: string) {
        this.app_session_key = app_session_key;
    }

    get_title() {
        return this.title;
    }

    set_title(title: string) {
        this.title = title;
    }

    get_form_type() {
        return this.form_type;
    }

    set_form_type(form_type: string) {
        this.form_type = form_type;
    }

    get_model_value(key: string) {
        if (this.model[key]) {
            return this.model[key].getValue();
        }
        return null;
    }

    get_model_item(key: string) {
        if (this.model[key]) {
            return this.model[key];
        }
        return null;
    }

    get_model_value_string(key: string) {
        if (this.model[key]) {
            return this.model[key].getValueString();
        }
        return null;
    }

    set_hidden(key: string) {
        this.hidden_items[key] = true;
    }

    is_hidden(key: string) {
        if (this.hidden_items[key]) {
            return true;
        }
        return false;
    }

    set_default_value(key: string, value: any) {
        this.default_values[key] = value;
    }

    get_default_value(key: string) {
        if (this.default_values[key]) {
            return this.default_values[key];
        }
        return null;
    }

    disable_delete() {
        this.delete_disabled = true;
    }

    is_delete_disabled() {
        return this.delete_disabled;
    }
}
