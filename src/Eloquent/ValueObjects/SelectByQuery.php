<?php

namespace Sitebill\Dragon\Eloquent\ValueObjects;

use Sitebill\Dragon\Eloquent\Column;
use Sitebill\Dragon\Helpers\DragonHelper;

class SelectByQuery extends BaseValueObject
{
    /**
     * @param  \Sitebill\Dragon\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @param Column $column
     */
    public function __construct( $model, $key, $value, $attributes, Column $column = null )
    {
        parent::__construct($model, $key, $value, $attributes, $column);
        $this->value_string = $this->getValueStringByKey($model, $key, $value, $attributes, $column);
    }

    public function getValueStringByKey ( $model, $key, $value, $attributes, Column $column) {
        $dataModel = DragonHelper::getDynamicModel($column->primary_key_table);
        $records = $dataModel->pluck($column->value_name, $column->primary_key_name)->toArray();
        if ( $records and isset($records[$value]) ) {
            return $records[$value];
        }
    }

    public function __toString () {
        return intval($this->value);
    }
}
