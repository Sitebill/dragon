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
    model: EntityItem[];
    private enable_collections: boolean;
    private hook: string;
    private readonly: boolean;
    private enable_comment: boolean;
    private app_url: string;
    private app_session_key: string;
    private title: string;
    private form_type: string;
    private ql_items: any;
    private params: {};
    private hidden_items: {};
    private default_values: {};
    private delete_disabled = false;

    constructor() {
        this.app_name = '';
        this.table_name = '';
        this.primary_key = '';
        this.key_value = 0;
        this.columns = [];
        this.model = [];
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

}
