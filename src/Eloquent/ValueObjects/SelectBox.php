<?php

namespace Sitebill\Dragon\Eloquent\ValueObjects;

use Sitebill\Dragon\Eloquent\Column;

class SelectBox extends BaseValueObject
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
        $this->select_data = $column->select_data();
    }
}
