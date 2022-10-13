<?php

namespace Sitebill\Dragon\Eloquent\ValueObjects;

use Sitebill\Dragon\Eloquent\Column;

abstract class BaseValueObject
{

    public $action;
    public $active_in_topic;
    public $name;
    public $value;
    public $value_string;
    public $value_default;
    public $value_field;
    public $value_name;
    public $value_primary_key;
    public $value_table;
    public $select_data_indexed;
    public $select_data;
    public $assign_to;
    public $combo;
    public $dbtype;
    public $entity;
    public $group_id;
    public $group_id_array = [];
    public $hint;
    public $primary_key;
    public $primary_key_name;
    public $primary_key_table;
    public $primary_key_value;
    public $query;
    public $required;
    public $required_boolean;
    public $tab;
    public $table_name;
    public $title;
    public $title_default;
    public $type;
    public $unique;
    public $columns_id;
    public $table_id;
    public $active;
    public $parameters = [];
    public $fxFlex;
    public $api;

    /**
     * @param  \Sitebill\Dragon\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @param Column $column
     */
    public function __construct( $model, $key, $value, $attributes, Column $column = null )
    {
        $this->value = $value;
        $this->title = isset($column) ? $column->title : $key;
        $this->type = isset($column) ? $column->type : 'safe_string';
    }

}
