<?php

namespace Sitebill\Dragon\Eloquent\ValueObjects;

use Sitebill\Dragon\Eloquent\Column;

class PrimaryKey extends BaseValueObject
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
        $this->value = $value;
        $this->type = 'primary_key';
    }
}
